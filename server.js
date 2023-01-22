const express = require('express');
const path = require('path');
const fs=require('fs');
const app = express();
const bodyParser=require('body-parser');
const db=require('./db/db.json');
// const { title } = require('process');
// const { text } = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

// var urlencodedparser=bodyParser.urlencoded({extended:false});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname,'notes.html/'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/api/notes', (req, res) => {
  res.json(db)
});

app.post('/api/notes',(req,res)=>{
  // response={
  //   title:req.body.title,
  //   text:req.body.text
  // }
  // console.log(response);
  // res.end(Json.stringify(response));
  //res.json(db)

  res.json(`${req.method} request recieved`);
 
});



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// app.listen(3000,function () {
//     console.log('app running');
// });