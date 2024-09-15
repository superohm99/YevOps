require('dotenv').config()
require('./configs/database').connect()


const express = require('express')
const auth = require('./controllers/auth');
const profile = require('./controllers/profile');
const order = require('./controllers/order');
const midauth = require('./middlewares/auth')


const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('Hello!'))


app.post('/register', auth.register);

<<<<<<< HEAD

app.post("/login", auth.login);

app.post('/welcome', midauth, (req, res) => {
    res.status(200).send("Welcome HACKER");
})
=======
app.post('/applyShop', auth.applyShop);

app.post("/login", auth.login);

app.post("/logout", auth.logout);

app.get('/profile', midauth, profile.getProfile);

app.put('/profile', midauth, profile.putProfile);

app.post("/createOrder", midauth, order.order);

app.post("/updateStatus", midauth, order.statusOrder);

>>>>>>> origin/Ruth

module.exports = app