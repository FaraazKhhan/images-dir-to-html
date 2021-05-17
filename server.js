const express = require('express');
const app = new express();
const bodyParser = require('body-parser');

const folderFiles = require('./js/getFiles');

// set view engine to ejs
app.set('view engine', 'ejs');

// tell express where we keep our index.ejs
app.set('views', __dirname + '/views');

// use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// use static files stored inside public folder
app.use(express.static('public'));

// instead of sending hello world, we render index.ejs
app.get('/', (request, response) => {
    response.render('index', { files: folderFiles.filesArray });
});

app.listen(8080, () => {
    console.log("Server is online on http://localhost:8080");
});