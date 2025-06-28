
const colors = require('colors');
const { mySqlPool } = require('../config/db');

const Student_Table = async () => {
    try {
        
        const studentTable = await mySqlPool.query(`CREATE TABLE student(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255) UNIQUE)`)

        console.log('student Table created'.bgYellow);
        

    } catch (error) {
        
        console.log(`Error in Student_Table : ${error.message}`.bgRed);     
    }
}

Student_Table();