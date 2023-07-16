const express = require("express");
const fs = require("fs");
const path = require("path");
const { title } = require("process");
const app = express();

const port = 80;
app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    const con = "this is  the best show in the world "
    const params = {'title':'this is game that are followed by many people in the world', content: con}
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${age}, years old, ${gender}, residing at ${address}, more about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your Form has been successfully'}
    res.status(200).render('index.pug', params);
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})
