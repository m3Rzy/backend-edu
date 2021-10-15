const express = require('express')
require('dotenv').config()
const sequelize = require('./db.js')
const chalk = require('chalk')

const PORT = 5000;

const app = express()

const start = async () => {
    try {
        await sequelize.authenticate(),
        await sequelize.sync()
        console.log(chalk.green("==== Успешное подключение к Базе данных. ===="))
        app.listen(PORT, () => console.log('Server has been started on port: ' + PORT))
        app.get("/", (req, res) => {
            res.json({ message: "Welcome to bezkoder application." });
          });
    } catch(e) {
        console.log(e)
    }
}

start()


