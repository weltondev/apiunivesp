const express = require('express');
const cors = require('cors');
const connectionDB = require('./database/connectionDB');
const app = express();

const routes = require('./routes/routes');

app.use(express.json());
app.use(cors());
app.use(routes);
connectionDB();

app.listen(3000, ()=> {
  console.log(`Servidor esta no ar!`);
});