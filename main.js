const {app, BrowserWindow} = require('electron')

let mainWindow
let childWindow
var createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: false
    })

    mainWindow.loadFile('./dist/signInUp/login.html')

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('browser-window-created', (e,window) => {
    window.setMenu(null)
})

app.on('ready', createWindow)


app.on('window-all-closed', () => {
    if  (process.platform !== 'darwin') {
        app.quit()
    }
})