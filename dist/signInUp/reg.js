const remote = require('electron').remote
const mysql = require('mysql')
const config = require('./src/config.js')
const c = remote.getGlobal('console')
const $ = require('jquery')




$('.signUp').click( () => {
    c.log('lobok pomoi poka molodoy')
})
