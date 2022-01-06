import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
dotenv.config()
app.use(express.json({ extended: true }))
app.use(cors())
const mongodb =
 "mongodb+srv://dsound:BaFldb8083@cluster0.zfhyq.mongodb.net/mern_stack_todo?retryWrites=true&w=majority"
app.get("/", (req, res) => {
 res.send("Welcome to server")
})

const PORT = process.env.PORT || 5000
