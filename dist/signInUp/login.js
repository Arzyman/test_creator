'use strict'
const electron = require('electron').remote
const $ = require('jquery')
const { dialog } = require('electron').remote
const { session } = require('electron').remote
const c = require('electron').remote.getGlobal('console')

var cUserInfo = {
    login: 'qwe',
    password: 'qwe'
}

var getUserInfo = () => {

    var userInfo = {
        login: '',
        password: '',
    }
    userInfo.login = $('#login').val()
    userInfo.password = $('#password').val()
    
    return userInfo
}

var checkUserInfo = (newInfo) => {
    if (cUserInfo.login == newInfo.login) {
        if (cUserInfo.password == newInfo.password) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

$('#btn').click(() => {
    var result = checkUserInfo(getUserInfo())
    if (result) {
        c.log('Vhod vipolnen')
    } else {
        c.log('sosi bibu')
    }
})

// let cookie = {
//     url: 'https://cookie.com',
//     name: 'user',
//     value: '123'
// }

// session.defaultSession.cookies.set(cookie, (err) => {
//     if (err) console.log(err)
// })

// $('#qqq').click(() => {
//     // dialog.showOpenDialog({
//     //     title: 'Simple Dialog'
//     // }, (filepath) => {
//     //     console.log('Filepath: ', filepath)
//     // })

//     session.defaultSession.cookies.get({}, (err, cookies) => {
//         console.log(err, cookies)
//     })
// })
