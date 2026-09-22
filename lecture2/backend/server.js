// const express = require("express")

import express from "express";

const app = express();

const Port = 3000;

app.get("/",(req,res) => {
    res.send("Hello World");
})

app.get("/api/joke",(req,res) => {
    const joke = [
        {
            "id": 1,
            "title": "A joke",
            "context": "This is a joke"
        },
        {
            "id": 2,
            "title": "Another joke",
            "context": "This is another joke"
        },
        {
            "id": 3,
            "title": "3rd joke",
            "context": "This is third joke"
        },
        {
            "id": 4,
            "title": "4th joke",
            "context": "This is 4th joke"
        }
    ];
    res.json(joke);
})
app.listen(Port,(req,res) => {
    console.log(`server is listen at port ${Port}`);
})