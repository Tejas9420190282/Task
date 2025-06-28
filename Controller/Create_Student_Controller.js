const { mySqlPool } = require("../config/db");

const Create_Student_Controller = async (req, res) => {
    try {

        const {name, email, mathsMarks, engMarks, sciMarks } = req.body;
        console.log(req.body);
        

        if (!name || !email || !mathsMarks || !engMarks || !sciMarks) {
            
            console.log(`All Inputs are Mandatory`.bgRed);
            return res.status(400).json({
                success : false,
                message : `All Inputs are Mandatory`
            })   
        }

        const [newStudent] = await mySqlPool.query("INSERT INTO student(name, email) VALUES (?,?)", [name, email]);

        const [studentData] = await mySqlPool.query("SELECT * FROM student WHERE email=?", [email]);

        const student = studentData[0];

        const studentId = student.id
        console.log(`studentId`, studentId);
        

        console.log('New Student created...'.bgYellow);
        
        const [studentMarks] = await mySqlPool.query("INSERT INTO exam(maths, english, science, studentId ) VALUES (?,?, ?,?)", [mathsMarks, engMarks, sciMarks, studentId])

        const [Marks] = await mySqlPool.query("SELECT * FROM exam WHERE studentId =?", [studentId]);

        const marks = Marks[0];
/* 
        const [StudentData] = await mySqlPool.query("SELECT student.name, student.email, exam.maths, exam.english, exam.science FROM student INNER JOIN exam ON student.id = exam.studenId WHERE exam.studentId =?", [studentId]);
 
        const data = StudentData[0];
*/
        console.log(`Successfully inserted Created new Student and inserted marks`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : "Successfully inserted Created new Student and inserted marks",
            student : student,
            marks : marks
        })
        
    } catch (error) {
        
        console.log(`Error in Create_Student_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({

            success : false,
            message : `Error in Create_Student_Controller : ${error.message}`

        })
    }
}

exports.Create_Student_Controller = Create_Student_Controller;