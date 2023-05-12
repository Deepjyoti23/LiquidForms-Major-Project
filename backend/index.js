const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const formRouter = require('./routers/formRouter');
const responseRouter = require('./routers/responseRouter');
const utilRouter = require('./routers/util');

const cors = require('cors');

app.use(cors({
    origin : ['http://localhost:3000'],
}));

app.use(express.json());

//middleware
app.use('/user', userRouter);
app.use('/form', formRouter);
app.use('/util', utilRouter);
app.use('/response', responseRouter);


app.get('/', (req, res ) => {
    res.send('Working Perfectly')
});

app.get('/add',(req, res) => {
    res.send('Response from add');
});
app.get('/getall',(req, res) => {
    res.send('Response from getall');
});
app.get('/update',(req, res) => {
    res.send('Response from update');
});

app.listen(port, () => {console.log('server started');});