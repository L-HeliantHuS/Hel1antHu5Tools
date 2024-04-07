const { app, BrowserWindow, ipcMain } = require('electron')
const {join} = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight:600,
        minWidth:800,
        autoHideMenuBar:true,
        frame: false,
        webPreferences: {
            preload: join(__dirname, 'src/electron/preload.js'),
        }
    })

    // 下面的url为自己启动vite项目的url。
    // win.loadURL('http://cacen2009.com:8005/')
    win.loadURL('http://localhost:5173/')
    // 打开electron的开发者工具
    win.webContents.openDevTools({ mode: 'detach' })

    // 关闭窗口
    ipcMain.handle("window:close", () => {
        win.close()
    })

    // 最小化
    ipcMain.handle("window:minimize", () => {
        win.minimize()
    })
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})