'use strict'

var mysql = require('mysql')

module.exports = {
    db: () => {
        var con = mysql.createConnection({
            host: 'aynurzdv.beget.tech',
            database: 'aynurzdv_testcre',
            user: 'aynurzdv_testcre',
            password: 'kscsqlzlz555'
        })
        
        return con
    }
}





