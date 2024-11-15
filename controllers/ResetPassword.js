const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");


exports.resetPasswordToken = async (res , req) => {
    try{

        const email = res.body.email;

        const user = await User.findOne({email: email});
        if(!user){
            return res.status(401).json({
                sucess:false,
                message:"User Is not registered with us try again",
            })
        }

        const token = crypto.randomBytes(20).toString("hex");

        const updatedDetails = await User.findOneAndUpdate({email:email},{token : token,resetPasswordExpires:Date.now() + 3600000 }, {new:true});


        const url = `https://localhost:3000/update-password/${token}`

        await mailSender(email, "Password Reset Link" , `Password Reset Url : ${url}`);


        return res.status(200).json({
            sucess:true,
            messasge:"Link Are Sent To Your Mail SuceesFully , Check And Change Password",
        })

    }catch(error){
        console.log("Erorr in Reset Password Token Contrroller  : ",error)
        return res.status(500).json({
            sucess:false,
            message:"Error in Reset Password Token Controller : did not generatate resetpassordtoken "
        })
    }
}



exports.resetPassword = async (res , req) => {
    try{
        const {password , confirmPassword , token} = req.body;
        if(password !== confirmPassword){
            return res.json({
                sucess:false,
                message:"Password did not matched!!!"
            })
        }

        const userDetail = await User.findOne({token: token});

        if(!userDetail){
            return res.json({
                sucess:false,
                message:"Token Is Invalid",
            })
        }


        if(!(userDetail.resetPasswordExpires > Date.now())){
            return res.json({
                sucess:false,
                message:"OOPS! Token is Expired!!!",
            })
        }


        const hashedPassword = await bcrypt.hash(password,10);

        await User.findOneAndUpdate({token: token},{password:hashedPassword},{new:true});
        
        return res.status(200).json({
            sucess:true,
            message:"Password Changed SucessFully!!!",
        });





    }catch(error){
        console.log("Erorr in Reset Password Contrroller  : ",error)
        return res.status(500).json({
            sucess:false,
            message:"Error in Reset Password try again",
        })
    }
}