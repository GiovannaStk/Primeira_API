const express = require('express')
const routes = express.Router()




//bd
let db = [
    {
        "1":{
            Nome: "Cliente1",
            Idade: "22"
        },
        
    },
    {
        "2":{
            Nome: "Cliente2",
            Idade: "33"
        }
    }
]


routes.get('/', (req, res) => {
    return res.json(db)
} )

routes.post('/id', (req, res) =>{
    const body = req.body 
    if(!body)
         return res.status(400).end()

         
    db.push(body)
    
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id
    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })
    db = newDB
    return res.send(newDB)
})


module.exports = routes