import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
dotenv.config()
app.use(express.json({ extended: true }))
app.use(cors())
const mongodb = MONGODB
app.get("/", (req, res) => {
 res.send("Welcome to server")
})

const PORT = process.env.PORT || 5000
