const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
let db = require('./db/db.json');

console.log(db);

const PORT = 3000;

app.use(bodyParser.json());

// var urlencodedparser=bodyParser.urlencoded({extended:false});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './notes.html'))
);




app.get('/api/notes', (req, res) =>
 {
  fs.readFile('./db/db.json', (err, data) => 
  {
    if (err) throw err;
    db = JSON.parse(data);
    //console.log(db);
  })
  res.json(db)
});


app.post('/api/notes', (req, res) => {
const note=req.body;
console.log(note);
res.json({message:'note created successfully'});

});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});






app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

