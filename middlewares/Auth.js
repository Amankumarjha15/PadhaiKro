const jwt = require("jsonwebtoken");
require("dotenv").config();
const user = require("../models/User");


exports.auth = async (req, res, next) => {
    try{
        const token = req.cookies.token || req.body.token || req.header('Authorization').replace('Bearer ', '');
        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token not found',
            })
        }


        //verify token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log("decoded : ", decode);
            req.user = decode;
        }catch(error){
            console.log("Error in auth middleware : ", error.message);
            return res.status(401).json({
                success:false,
                message:' Error in Auth Middleware : Invalid Token or Expired Token',
            })
        }

        next();

    }catch(error){
        console.log("Error in auth middleware : ", error.message);
        return res.status(500).json({
            success:false,
            message:'Error In Auth Middleware : Something went wrong while verifying token',
        })
    }
}



exports.isStudent = async (res , req , next) => {
    try{
        if(req.user.accountType !=="Student"){
            return res.status(401).json({
                sucess:false,
                message:"This Is Protected Route For Students Only",
            })
        }

        next();


    }catch(error){
       return res.status(500).json({
        sucess:false,
        message:'Error in IsStudent Middleware : User Role Is Not VeriFied Try Again',
       })
    }
}


exports.isInstructor = async (res , req , next) => {
    try{
        if(req.user.accountType !=="Instructor"){
            return res.status(401).json({
                sucess:false,
                message:"This Is Protected Route For Instructor Only",
            })
        }

        next();


    }catch(error){
       return res.status(500).json({
        sucess:false,
        message:'Error in IsInstuctor Middleware : User Role Is Not VeriFied Try Again',
       })
    }
}


exports.isAdmin = async (res , req , next) => {
    try{
        if(req.user.accountType !=="Admin"){
            return res.status(401).json({
                sucess:false,
                message:"This Is Protected Route For Admin Only",
            })
        }

        next();


    }catch(error){
       return res.status(500).json({
        sucess:false,
        message:'Error in Admin Middleware : User Role Is Not VeriFied Try Again',
       })
    }
}