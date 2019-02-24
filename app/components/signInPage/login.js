'use strict'
const remote = require('electron').remote
const main = remote.require('./main.js')
const $ = require('jquery')
const ipcRender = require('electron').ipcRenderer


//footer date
var writeFooterDate = () => {
    let nowDate = new Date
    $('.copyright').text(`© ArzyLab 2018 - ${nowDate.toLocaleString('ru', {year: 'numeric'})}`)
}

writeFooterDate()

//open regWindow

$('.signUp').click(() => {
    main.openReg()
})

$('.signIn').click(() => {
    let window = remote.getCurrentWindow()
    main.openWorkSpace()
    window.close()
})
