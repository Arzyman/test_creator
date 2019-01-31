const {app, BrowserWindow} = require('electron')

let logWindow
let regWindow

app.on('ready', () => {
    logWindow = new BrowserWindow({
        width: 1200,
        height: +'800',
        minWidth: 1200, 
        minHeight: 800, 
    })
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/login.html`)
    logWindow.maximize()
})

exports.openReg = () => {
    regWindow = new BrowserWindow({width: 1200, height: 800, parent: logWindow})
    regWindow.loadURL(`file://${__dirname}/dist/signInUp/reg.html`)
}