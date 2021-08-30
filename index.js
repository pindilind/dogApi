const fs = require('fs');
const express = require('express')
const server = express()
const port = 3000

server.use(express.json())


server.get('/api', (req, res) => {
    let raw = fs.readFileSync("dogs.json") //hämtar url till jsonfil
    let dogItems = JSON.parse(raw)
    res.json(dogItems) 
})


server.post('/api', (req, res) => {
    try {
        let raw = fs.readFileSync("dogs.json") //hämtar url till jsonfil
        let dogItems = JSON.parse(raw)
        console.log(dogItems)
        dogItems.push(req.body)
        fs.writeFileSync("dogs.json", JSON.stringify(dogItems))
        res.json(true)
  
    } catch(err) {
      console.error(err)
      res.status(500).json(false)
    }
  })

  server.delete('/api', (req, res) => {
    res.send("DELETE Request Called")
  })


server.use(express.static('public'))
/* server.use(express.static('data/img')); */

server.listen(port, () => {
  console.log(`Voff! The application is working `)
})