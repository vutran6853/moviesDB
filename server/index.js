require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const port = process.env.SERVER_PORT || 3002;
const cors = require('cors');
const app = express();

app.use(cors());

app.use(json());

app.listen(port, () => {
    console.log(`Server is UP and listening on port ${ port }`);
})