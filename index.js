import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import todosRoutes from "./routes/todos.js"

const app = express()
dotenv.config()
app.use(express.json({ extended: true }))
app.use(cors())
app.use("/todos", todosRoutes)
app.get("/", (req, res) => {
 res.send("Welcome to server")
})

const PORT = process.env.PORT || 5000

mongoose
 .connect(process.env.MONGODB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
 })
 .then(() => console.log(`server is running on Port ${PORT}`))
 .then(() => console.log(`server is running on port ${PORT}`))
 .catch((err) => console.log(err))
