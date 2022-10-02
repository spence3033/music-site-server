const express = require('express');
const app = express();

app.get('/getData', (req, res) => {
    const savedObj = new Object();
    savedObj.id = 123;
    savedObj.assignment = "listening assignment";
    savedObj.url = "https://www.youtube.com/embed/YvZsOTJEUUc";
    
    res.json(savedObj);
})



app.listen(3000, (req, res) =>{
    console.log('Express API is running at port 3000');
})