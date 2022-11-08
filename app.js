const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
const bodyparser = require("body-parser");
const port=80;
app.use('/static', express.static('static')) // For serving static files

app.use(express.urlencoded());

app.use(express.urlencoded())

app.use(express.static(__dirname))

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.html', params);
})


app.get('/index1', (req, res)=>{
    const params = {}
    res.status(200).render('index1.html', params);
})
app.get('/index2', (req, res)=>{
    const params = {}
    res.status(200).render('index2.html', params);
})
app.get('/index3', (req, res)=>{
    const params = {}
    res.status(200).render('index3.html', params);
})
app.get('/index4', (req, res)=>{
    const params = {}
    res.status(200).render('index4.html', params);
})
app.get('/index5', (req, res)=>{
    const params = {}
    res.status(200).render('index5.html', params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port 80`);
});