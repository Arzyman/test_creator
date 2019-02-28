'use strict';

var mysql = require('mysql');

module.exports = {
    db: () => {
        const dbConfig = {
            host: 'aynurzdv.beget.tech',
            database: 'aynurzdv_testcre',
            user: 'aynurzdv_testcre',
            password: 'kscsqlzlz555',
            connectTimeout: 3600000
        };
        return mysql.createConnection(dbConfig);
    }
};





