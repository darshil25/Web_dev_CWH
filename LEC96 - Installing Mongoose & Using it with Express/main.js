//mongoose helps to validate crud operations on mongodb

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let connect = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({  des: "greetingasds", isDone: false, days: Math.floor(Math.random()*45 + 5*Math.random())}) //if we put number in string required field like name then mongoose convert number into string and then insert it but if we put string in number required field then it will not insert it and crash the server but can convert number string like "123" into number 123 and insert it
    todo.save()
    res.send('Hello World!')
})

app.get('/aa', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({name: todo.name, des: todo.des})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})