'use strict'
//imports

const electron = require('electron').remote
const $ = require('jquery')
const { session } = require('electron').remote
const c = require('electron').remote.getGlobal('console')

c.log('---')


var writeFooterDate = () => {
    let nowDate = new Date
    $('.test-footer-text').text(`© ArzyLab 2018 - ${nowDate.toLocaleString('ru', {year: 'numeric'})}`)
}

writeFooterDate()