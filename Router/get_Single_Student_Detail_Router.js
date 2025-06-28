


const express = require('express');
const { get_Single_Student_Detail_Controller } = require('../Controller/get_Single_Student_Detail_Controller');


const get_Single_Student_Detail_Router = express.Router();

get_Single_Student_Detail_Router.get("/id", get_Single_Student_Detail_Controller);

exports.get_Single_Student_Detail_Router = get_Single_Student_Detail_Router;
