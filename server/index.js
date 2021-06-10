const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config')

//middlewares
app.use(cors())
app.use(bodyParser.json());

//import routes
const postRoute = require('./routes/posts')
const profileRoute = require('./routes/profile')

app.use('/posts', postRoute)
app.use('/profile', profileRoute)

//routes
app.get('/', (req, res) => {
  res.send('We are on home');
})

const CONNECTION_URL = 'mongodb+srv://testRest:testRest123@cluster0.bne94.mongodb.net/sample_rest?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running in port: ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false)