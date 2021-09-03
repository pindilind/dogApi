const fs = require('fs');
const express = require('express')
const server = express()
const port = 3000

server.use(express.json())


server.get('/api', (req, res) => {
  let raw = fs.readFileSync("dogTodos.json") //hämtar url till jsonfil
  let todolist = JSON.parse(raw)
  res.json(todolist)
})


server.post('/api', (req, res) => {
  try {
    let raw = fs.readFileSync("dogTodos.json") //hämtar url till jsonfil
    let todolist = JSON.parse(raw)
    console.log(todolist)
    todolist.push(req.body)
    fs.writeFileSync("dogTodos.json", JSON.stringify(todolist))
    res.json(true)

  } catch (err) {
    console.error(err)
    res.status(500).json(false)
  }
})



server.use(express.static('public'))


server.listen(port, () => {
  console.log(`Voff! The application is working `)
})