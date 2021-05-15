const app = require('express')();
const bodyParser = require('body-parser');

const files = require('./js/app');

// set view engine to ejs
app.set('view engine', 'ejs');

// tell express where we keep our index.ejs
app.set('views', __dirname + '/views');

// use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// instead of sending hello world, we render index.ejs
app.get('/', (request, response) => {
    response.render('index', { filesArray: files.filesArray });
});

app.listen(8080, () => {
    console.log("Server is online on http://localhost:8080");
});