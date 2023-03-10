const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');

require('dotenv').config();


const connectDB = require('./src/config/db_init.js')


/*routes import*/
const auth= require('./src/api/routes/authRoute.js');
const departement= require('./src/api/routes/departementRoute.js');
const event= require('./src/api/routes/eventRoute.js');
const project= require('./src/api/routes/projectRoute.js');
const ticket= require('./src/api/routes/ticketRoute.js');

const member = require('./src/api/routes/memberRoute')
const badge = require('./src/api/routes/badgeRoute')
const task = require('./src/api/routes/taskRoute')
const notification = require('./src/api/routes/notificationRoute')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

connectDB();

//Main Route
app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});


//call routes
app.use('/member', member)
app.use('/badge', badge)
app.use('/task', task)
app.use('/notification', notification)

/*sub apps routes*/
app.use('/auth', auth)
app.use('/projects',project)
app.use('/departements',departement)
app.use('/events',event)
app.use('/tickets', ticket)



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




// if the route is not found
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});







// if the route is not found
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
