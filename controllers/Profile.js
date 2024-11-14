const profile = require("../models/Profile");
const user = require("../models/User");

exports.updateProfile = async (res , req) => {
    try{

        const {dateOfBirth="" , about="" , contactNumber , gender} = req.body;

        const id = req.user.id;

        if(!gender || !contactNumber || !id){
             return res.status(401).json({
                sucess:false,
                message:"All the require fields are required",
             })
        };

            const userDetails = await user.findById(id);
            const profileId = userDetails.addtionalDetails;
            const profileDetails = await profile.findById(profileId);

            profileDetails.dateOfBirth = dateOfBirth;
            profileDetails.about = about;
            profileDetails.gender = gender;
            profileDetails.contactNumber = contactNumber;
            await profileDetails.save();


            return res.status(200).json({
                sucess:true,
                message:"Profile Updated Sucessfully",
                profileDetails,
            })

    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:"Something went wrong while updating profile",
            error:error.message,
        })
    }
}

exports.deleteAccount = async (req , res) => {
    try{

        const id = req.user.id;

        const userDetails = await user.findById(id);

        if(!user){
            return res.status(400).json({
                sucess:false,
                message:"User not Found",
            })
        };

        const userProfile = await profile.findByIdAndDelete({_id:userDetails.addtionalDetails});

        await user.findByIdAndDelete(id);

        return res.status(200).json({
            sucess:true,
            message:"User Deleted sucesssfully",
        })


        // apply a cron job task scheduler to delete user in 5 to 7 days bascally i have to schedule a task of delete user in 5 days
        // task scheduler knowledge

    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:"Something went wrong while deleting user account please try again !!!",
            error:error.message,
        })
    }
}



exports.getAllUserDetails = async (req , res) => {
    try{

        const id = req.user.id;

        const userDetails = await user.findById(id).populate("additionalDetails").exec();

        return res.status(200).json({
            sucess:true,
            message:"User Data Fetched Sucessfully",
        })


    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:"Something went wrong while getting user details",
        })
    }
}