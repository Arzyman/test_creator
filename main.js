const {app, BrowserWindow} = require('electron')

let mainWindow
var createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 1200,
        autoHideMenuBar: false,
    })

    mainWindow.loadFile('./dist/workSpace/index.html')

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}
app.on('browser-window-created', (e,window) => {
    window.setMenu(null)
    window.maximize()
})

app.on('ready', createWindow)


app.on('window-all-closed', () => {
    if  (process.platform !== 'darwin') {
        app.quit()
    }
})