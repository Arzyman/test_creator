'use strict'

var mysql = require('mysql')

module.exports = {
    db: () => {
        const dbConnection = mysql.createConnection({
            host: 'aynurzdv.beget.tech',
            database: 'aynurzdv_testcre',
            user: 'aynurzdv_testcre',
            password: 'kscsqlzlz555'
        })
        
        return dbConnection

    }
}





