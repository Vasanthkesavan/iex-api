const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const db = require('./db').mongoose;
// helper function
const getSymbols = require('./helpers/getSymbols');
const currentState = require('./helpers/currentState');
const saveLayout = require('./helpers/saveLayout');
const getStatsURL = require('./helpers/getStatsURL');
const getCompanyStats = require('./helpers/getCompanyStats');
const sendCompanyStats = require('./helpers/sendCompanyStats');
const getCompanyList = require('./helpers/getCompanyList');
const getCompanyInfo = require('./helpers/getCompanyInfo');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});

// Routes
app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/api/getSymbols', getSymbols);
app.get('/api/currentState', currentState);
app.get('/api/getStatsURL', getStatsURL);
app.get('/api/getCompanyStats', getCompanyStats);
app.get('/api/sendCompanyStats', sendCompanyStats);
app.get('/api/getCompanyList', getCompanyList);
app.post('/api/getCompanyInfo', getCompanyInfo);

app.post('/api/saveLayout', saveLayout);

// once socket is open
io.on('connection', function(socket) {
    socket.on('disconnect', function() {
        console.log('user disconnected!');
    });

    socket.on('sample_message', function(val) {
        // console.log('Before emit: ', val);
        io.emit('new_sample_message',val);
    });

    socket.on('cell_value_changed', function(val) {
        // console.log('Before cell value changed ', date.getHours(), ' ' , val);
        io.emit('new_cell_value', val);
    })
});


http.listen(3000, () => console.log('Server is connected on 3000!'))
