




const express = require('express');
Get_Students_Details_Router


const Get_Students_Details_Router = express.Router();

Get_Students_Details_Router.get("/students", Get_Students_Details_Controller);

exports.Get_Students_Details_Router = Get_Students_Details_Router;
