const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const mongoUri = 'mongodb+srv://admin:admin@cluster0-3tvyu.gcp.mongodb.net/test?retryWrites=true&w=majority'
const connectDB = () =>
    mongoose.connect(mongoUri,{
        useNewUrlParser: true,
        useCreateIndex: true,
    })
        .then(() => console.log ('DB Connected!'))
        .catch(() => console.log('Failed to Connect DB!'));

connectDB();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

const {
    userList,
    getUserById,
    addUser,
    editUser,
    deleteUser,
} = require('./modules/user');

const {
    login,
} = require('./modules/auth');


app.post('/login', login) ; 
app.get('/users', userList) ; 
app.get('/users/:id', getUserById);
app.put('/users/:id', editUser);
app.delete('/users/:id', deleteUser);
app.post('/users', addUser) ;
    
app.listen(5000, () => {
    console.log('App Running Up!');
});