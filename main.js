const {app, BrowserWindow} = require('electron')

let logWindow

app.on('ready', () => {
    logWindow = new BrowserWindow({
        width: 1200,
        height: +'800',
        minWidth: 1200, 
        minHeight: 800, 
    })
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/login.html`)
    logWindow.maximize()
    // logWindow.setMenu(null)
})

exports.openReg = () => {
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/reg.html`)
}
exports.openLog = () => {
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/login.html`)
}

exports.openWorkSpace = () => {
    logWindow.loadURL(`file://${__dirname}/dist/workSpace/index.html`)
}