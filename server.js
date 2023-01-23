const express = require('express');
const path = require('path');
const fs=require('fs');
const app = express();
const bodyParser=require('body-parser');
const db=require('./db/db.json');

const PORT = 3000;

app.use(bodyParser.json());

// var urlencodedparser=bodyParser.urlencoded({extended:false});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname,'notes.html/'))
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/api/notes', (req, res) => 
  res.json(db)

);

// app.post('/api/notes',(req,res)=>{


//   // res.json(`${req.method} request recieved`);

// // console.log(req.body);
 
// let newnote=req.body;
// db.push(newnote);
// fs.writeFile('./db/db.json',JSON.stringify(req.body,null,2),(err) =>{
//   if(err){
//     res.status(500).send('Error on Writing to the File')
//   }
//   else{
//     //res.send('Data Written to File')
//     res.send(req.body)
//   }
// })
// });

//   fs.readFile('./db/db.json',(err,data) =>{
//     if(err){

//       console.log(err);
//     }
//     else{
//       let jsondata=JSON.parse(data)
//       res.json(jsondata)
//       console.log(jsonString);
//     }
   
//   })


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

