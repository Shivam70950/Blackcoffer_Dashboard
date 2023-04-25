import express from 'express'
import db from './utils/database.js'
import dotenv from 'dotenv'
import enviorment from './routes/enviormentRoute.js'

const app = express()
app.use(express.json())

dotenv.config()
// connect DB
db()

app.use('/api/v1', enviorment)

app.listen(4000, () => {
    console.log("Listening on port 4000")
})