const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();


const connectDB = require('./src/config/db_init.js')

/*routes import*/
const departement= require('./src/api/routes/departementRoute.js');
const event= require('./src/api/routes/eventRoute.js');
const project= require('./src/api/routes/projectRoute.js');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

/*connecting to DataBase*/
connectDB();

app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});



/*mini apps routes*/
app.use('/projects',project)
app.use('/departement',departement)
app.use('/event',event)


app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
