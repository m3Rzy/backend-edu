const db = require('../db.js')
const chalk = require("chalk");

class UserController {
    async createUser(req,res){
        const {name, surname} = req.body
        //console.log(name, surname)
        const newPerson = await db.query(`INSERT INTO person (name,surname) values ($1, $2) RETURNING * `, [name, surname])
        res.json(newPerson.rows[0])
        console.log(chalk.bold.green('Пользователь ' + name, surname + ' успешно создан!'))
    }
    async getUsers(req,res){
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
    }
    async getOneUser(req,res){
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person WHERE id = $1`, [id])
        res.json(user.rows[0])

    }
    async updateUser(req,res){
        const {id, name, surname} = req.body
        const user_update = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id])
        res.json(user_update.rows[0])
    }
    async deleteUser(req,res){
        const id = req.params.id
        const user_delete = await db.query(`DELETE FROM person WHERE id = $1`, [id])
        res.json(user_delete.rows[0])
    }
}

module.exports = new UserController()