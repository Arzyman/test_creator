'use strict'

const remote = require('electron').remote
const config = require('../../src/config.js')
const c = remote.getGlobal('console')
const $ = require('jquery')

// database connection
var dbCon = config.db()

dbCon.connect((err) => {
    if (err) c.log('Connection error')
    c.log('Connection succes')
})

var getUserData = () => {
    return {
        secondname: $('#secondname').val(),
        firstname: $('#firstname').val(),
        patronymic: $('#patronymic').val(),
        position: $('#position').val(),
        email: $('#email').val(),
        username: $('#username').val(),
        password: $('#password').val(),
        rePassword: $('#repeate-password').val()
    }
}

var checkEmpty = (user) => {
    for (var key in user) {
        if (user[key] === null) user[key] = false
        
        if (!user[key]) {
            if (key == 'rePassword') {
                $('#repeate-password').addClass('error')
            }

            $(`#${key}`).addClass('error')
            c.log('-')

        } else {
            c.log('+')
        }
    }
    c.log('---')
}

$('.signUp').click( () => {
    let user = getUserData()
    checkEmpty(user)
})

$('.back').click( () => {
    window.close()
})

