const User = require("../models/User");
const OTP = require("../models/OTP");
const Profile = require("../models/Profile");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();




exports.sendOTP = async (req , res) => {

    try{
            const {email} = req.body;


            const checkUserPresent = await User.findOne({email});

            if(checkUserPresent){
                return res.status(401).json({
                    sucess:false,
                    message:'User already Exist',
                })
            }

            var otp = otpGenerator.generate(6 , {
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            
            console.log("otp generated : ", otp);

            var result = await OTP.findOne({otp: otp})

            while(result){
                var otp = otpGenerator.generate(6 , {
                    upperCaseAlphabets:false,
                    lowerCaseAlphabets:false,
                    specialChars:false,
                });
               
                const result = await OTP.findOne({otp: otp})
            }

            const otpPayload = {email , otp};

            const otpbody = await OTP.create(otpPayload);
            console.log(otpbody);


            res.status(200).json({
                sucess:true,
                message:'OTP Sent Sucessfully',
                otp,
            })


    }catch(error){
        console.log("Error in auth sendotp controller : ", error.message)
        return res.status(400).json({
            sucess:false,
            message:`Error in auth sendotp controller : ${error.message}`
        })

    }
}



exports.signUp = async (req , res) => {

    try{
        const{
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp,
        }=req.body;

        if(!firstName || !lastName || !email || !password || !confirmPassword|| !otp ){
            return res.status(403).json({
                sucess:false,
                message:'All fields are required',
            })
        }

        if(password !== confirmPassword){
            return res.status(403).json({
                sucess:false,
                message:'Password And ConfirmPassword Does not match please try again '
            })
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                sucess:false,
                message:'User Already Register , Please Try To Login',
            })
        }

        const recentOtp = await OTP.find({email}).sort({CreatedAt:-1}).limit(1);

        if(recentOtp.length == 0){
            return res.status(400).json({
                sucess:false,
                message:'OTP Not Found Try Again',
            })
        } else if (otp!==recentOtp){
            return res.status(400).json({
                sucess:false,
                message:'OTP Does Not Matched Invalid OTP',
            })
        }


        const hasedPassword = await bcrypt.hash(password,10);

        const prpofileDetail = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null, 
            contactNumber:contactNumber || null,
        });

        const user = await User.create({
            firstName,
            lastName,
            email,
            password:hasedPassword,
            accountType:accountType,
            contactNumber,
            addtionalDetails:prpofileDetail._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        })

        return res.status(200).json({
            sucess:true,
            message:'User Registered Sucessfully',
            user,
        })




    }catch(error){
        console.log("Error in sign up controller : ", error.message);
        return res.status(500).json({
            sucess:false,
            message:`Error in sign up controller : ${error.message}`,
        })
    }

}



exports.logIn = async (res , req) => {
        try{

            const {email , password} = req.body;

            if(!email || !password){
                return res.status(403).json({
                    sucess:false,
                    message:'Pleease Fill All The Details ',
                })
            }

            const user = await User.findOne({email}).populate("additionalDetails");

            if(!user){
                return res.status(401).json({
                    sucess:false,
                    message:'User Not Found Please Sign Up First',
                })
            }


            if(await bcrypt.compare(password , hasedPassword)){
                const payload = {
                    email: user.email,
                    id: user._id,
                    accountType: user.accountType,
                }
                const token = jwt.sign(payload , process.env.JWT_SECRET , {
                    expiresIn:"24h",
                });



                user.token = token;
                user,password = undefined;
                
    
                const options = {
                    expires: new Date(Date.now() + 3*24*60*60*1000),
                    httpOnly:true,
                }
    
                return res.cookie("token" , token , options).status(200).json({
                    sucess:true,
                    user,
                    token,
                    message:'User Logged in SucessFully',
                });
    
            }else{
                return res.status(401).json({
                    sucess:false,
                    message:"Password Is Incorrect Try Again",
                });
            }

          








        }catch(error){
            console.log("Error In Login Handler : ", error);
            return res.status(500).json({
                sucess:false,
                message:'Login Failure Please Try Again',
            })
        }
}









exports.changePassword = async (req, res) => {
    try {
      // Get user data from req.user
      const userDetails = await User.findById(req.user.id)
  
      // Get old password, new password, and confirm new password from req.body
      const { oldPassword, newPassword } = req.body
  
      // Validate old password
      const isPasswordMatch = await bcrypt.compare(
        oldPassword,
        userDetails.password
      )
      if (!isPasswordMatch) {
        // If old password does not match, return a 401 (Unauthorized) error
        return res
          .status(401)
          .json({ success: false, message: "The password is incorrect" })
      }
  
      // Update password
      const encryptedPassword = await bcrypt.hash(newPassword, 10)
      const updatedUserDetails = await User.findByIdAndUpdate(
        req.user.id,
        { password: encryptedPassword },
        { new: true }
      )
  
      // Send notification email
      try {
        const emailResponse = await mailSender(
          updatedUserDetails.email,
          "Password for your account has been updated",
          passwordUpdated(
            updatedUserDetails.email,
            `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
          )
        )
        console.log("Email sent successfully:", emailResponse.response)
      } catch (error) {
        // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
        console.error("Error occurred while sending email:", error)
        return res.status(500).json({
          success: false,
          message: "Error occurred while sending email",
          error: error.message,
        })
      }
  
      // Return success response
      return res
        .status(200)
        .json({ success: true, message: "Password updated successfully" })
    } catch (error) {
      // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
      console.error("Error occurred while updating password:", error)
      return res.status(500).json({
        success: false,
        message: "Error occurred while updating password",
        error: error.message,
      })
    }
  }
