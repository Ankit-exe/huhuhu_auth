const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
const dbconfig = require('./config/dbconfig');
app.use(express.json());

const usersRoutes = require('./routes/usersRoute');

app.use('/api/users' , usersRoutes);

app.listen(port, () => console.log(`NODE JS SERVER IS STARTED AT ${port}`));
