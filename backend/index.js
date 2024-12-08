// importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');
const cors = require('cors');


// initializing express
const app = express();
const port = 5000;

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use('/user', UserRouter);
app.use('/product', ProductRouter);

// accept and process request
// route
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
})

// getall
// delete
// update

// start the server
app.listen(port, () => {
    console.log('server started');
});