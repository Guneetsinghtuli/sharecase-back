const express = require('express');
const app = express();
var KiteConnect = require("kiteconnect").KiteConnect;
const PORT = process.env.PORT || 3000;
const db = require('./db.js');



app.use(express.json());

app.use('/api',require('./app.js'));


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
