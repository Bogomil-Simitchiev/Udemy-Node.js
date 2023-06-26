const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const mainController = require('./controllers/main');
const addUserController = require('./controllers/addUser');


app.use(mainController);
app.use(addUserController.router);


app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000, () => console.log('Server is listening on port 3000'));