const app = require('./app');
require('dotenv').config();

// server
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});