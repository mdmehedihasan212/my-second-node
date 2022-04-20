const express = require('express');
const cors = require('cors')
const { get } = require('express/lib/response');
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello word!')
})

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: 11111111 },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: 21111111 },
    { id: 3, name: 'mousumi', email: 'mousumi@gmail.com', phone: 31111111 },
    { id: 4, name: 'purnima', email: 'purnima@gmail.com', phone: 41111111 },
    { id: 5, name: 'popiya', email: 'popiya@gmail.com', phone: 51111111 },
    { id: 6, name: 'bobita', email: 'bobita@gmail.com', phone: 61111111 },
];

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'papaya', 'lichi', 'pianapple'])
})

app.listen(port, () => {
    console.log('Example app listing port', port);
})