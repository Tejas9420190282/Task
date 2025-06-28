const { mySqlPool } = require("../config/db");

const get_Single_Student_Detail_Controller = async (req, res) => {
    try {

        const {studentId} = req.body;

         if (!studentId) {
            
            console.log(`All Inputs are Mandatory`.bgRed);
            return res.status(400).json({
                success : false,
                message : `All Inputs are Mandatory`
            })   
        }

        const [studentData] = await mySqlPool.query("SELECT * FROM student WHERE id=?", [studentId]);

        const student = studentData[0];
        
        const [Marks] = await mySqlPool.query("SELECT * FROM exam WHERE studentId =?", [studentId]);

        const mark = Marks[0]

        console.log('Success to get all detals of Student'.bgYellow);

        res.status(200).json({
            success : true,
            message : `Success to get all detals of Student`,
            student : student,
            mark : mark
        })
        
        

    } catch (error) {
        
        console.log(`Error in get_Single_Student_Detail_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({

            success : false,
            message : `Error in get_Single_Student_Detail_Controller : ${error.message}`
        })
    }
}

exports.get_Single_Student_Detail_Controller = get_Single_Student_Detail_Controller