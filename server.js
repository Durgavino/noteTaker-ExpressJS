const express = require('express');
const path = require('path');
const fs=require('fs');

const app = express();
const db = require('./Develop/db/db.json');

const PORT = 3000;

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

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// app.listen(3000,function () {
//     console.log('app running');
// });