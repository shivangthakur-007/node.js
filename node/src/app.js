import express from "express";
const app = express()
// routing
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram',(req,res)=>{
    res.send('<h1>Hello Instagram </h1>')
})


export default app;