

const colors = require('colors');
const { mySqlPool } = require('../config/db');

const Exam_Table = async () => {
    try {
        
        const ExamTable = await mySqlPool.query(`CREATE TABLE exam(id INT PRIMARY KEY AUTO_INCREMENT, maths INT, english INT, science INT, studentId int, FOREIGN KEY(studentId) REFERENCES student(id))`);

        console.log('student Table created'.bgYellow);
        

    } catch (error) {
        
        console.log(`Error in Exam_Table : ${error.message}`.bgRed);     
    }
}

Exam_Table();

