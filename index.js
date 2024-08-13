const Express = require('express');
const objExpress = new Express();
const bodyParser = require('body-parser');

const db = require('./includes/dbconnection');

objExpress.use(bodyParser.json());
objExpress.use(bodyParser.urlencoded({ extended: true }));

objExpress.post('/api/login', (req,res) => {

    
    res.json({
        'id': 1,
        'name': 'Sibtain',
        'username': req.body.username,
        'password': req.body.password
    });

});

const port = 3000
objExpress.listen(port,()=>console.log(`Listening at ${port}...`));