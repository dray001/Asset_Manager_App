const express = require('express'); // to initialize a server, framework for Node.js
const connect = require('./connect');
require('dotenv').config(); // to encapsulate important informations and keys
const categoriesRoutes = require('./routes/categories');

const app = express();

// app.use() is executed any time I make a request like reloading the browser
// or clicking send in postman like an after effect of loading a site.

app.use(express.json()); 

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

app.get('/', (req, res) => {
  res.send('Báwoni áráye!');
});

app.use('/api/categories', categoriesRoutes);

app.use((err, req, res, next)=> {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
})

const listen = async () => {
    const data_base = await connect(process.env.DB);
    if (data_base) {
        app.listen(process.env.PORT, () => {
            console.log('Motí wole oO 😆')
            console.log(`App running on port ${process.env.PORT}`);
        });
    }
};

listen();