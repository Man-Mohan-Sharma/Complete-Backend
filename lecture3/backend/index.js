const express = require('express');
const app = express()
const Port = 3000;
app.get('/',(req,res)=>{
    res.send("Hello current page");
})
app.get('/home',(req,res)=>{
    res.send("Hello Home page");
})

app.listen(Port,(req,res)=>{
    console.log(`server is working at ${Port}`);
})