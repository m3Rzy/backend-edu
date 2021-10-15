const express = require('express')
const chalk = require('chalk')
const userRouter = require('./routes/user.routes')

const PORT = 3000;

const app = express()
app.use(express.json())

app.use('/api', userRouter)

app.listen(3000, () => console.log(chalk.yellow('Server has been started on port: ' + PORT)))