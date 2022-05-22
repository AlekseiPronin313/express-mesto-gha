const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mestodb'), {
    useNewUrlParser: true
};

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    req.user = {
      _id: '628a583ad30831930a2fc319',
    };
  
    next();
  });

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use((_, res) => {
    res.status(404).send({ message: 'Страница с таким url не найдена' });
  });

app.listen(PORT);