
const express = require('express');
const colors = require('colors');
const { mySqlPool } = require('./config/db');
const cors = require('cors');
const { Create_Student_Router } = require('./Router/Create_Student_Router');
const { get_Single_Student_Detail_Router } = require('./Router/get_Single_Student_Detail_Router');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// student

app.use(Create_Student_Router);

app.use(get_Single_Student_Detail_Router);

const PORT = 1212;

mySqlPool.query("SELECT 1").then(() => {

    console.log('Database connected Successfully'.bgGreen);
 
    app.listen(PORT, () => {

        console.log(`Server running on http://localhost:${PORT}`.bgGreen);
        
    })
    
}).catch((err) => {
    
    console.log(`Error in Server : ${err.message}`.bgRed);
    
});
