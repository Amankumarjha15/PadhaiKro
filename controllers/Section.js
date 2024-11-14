const section = require("../models/Section");
const course = require("../models/Course");


exports.createSection = async (res, req) => {
    try{

        const {sectionName , courseId} = req.body;

        if(!sectionName || !courseId){
            return res.json({
                sucess:false,
                message:"Sent all Details Correctly",
            })
        }

        const newSection = await section.create({sectionName});

        const updatedCourseDetails = await course.findByIdAndUpdate
        (courseId , {$push:{courseContent:newSection._id}},{new:true}).populate("section").populate("subSection").exec();


        return res.status(200).json({
            sucess:true,
            message:"Section created sucessfully",
            updatedCourseDetails,
        })

    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            sucess:false,
            message:"Something Went Wrong While Creating Section",
            error:error.message,
        });
    }
}




exports.updateSection = async (res,req) => {
    try{

        const {sectionName , sectionId} = req.body;
        
        if(!sectionName || !sectionId){
            return res.json({
                sucess:false,
                message:"Sent all Details Correctly",
            })
        };

        const Section = await section.findByIdAndUpdate(sectionId , {sectionName},{new:true});


        return res.status(200).json({
            sucess:true,
            message:"Section updated sucessfully",
        })


    }catch(error){
            console.log(error.message);
            return res.status(500).json({
                sucess:false,
                message:"Something Went Wrong While updating Section",
                error:error.message,
            });
    }
}


exports.deleteSection = async (res , req) => {
    try{

        // get ID - assuming we are getting id by params from frontend
        const {sectionId} =req.params;

        await section.findByIdAndDelete(sectionId);


        // testing k time check krna hai k mujhe course k schema m se bhi delete krna hai id section ka

        return res.status(200).json({
            sucess:true,
            message:"Sucessfully deleted section",
        })

    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            sucess:false,
            message:"Something Went Wrong While Deleting Section",
            error:error.message,
        });
    }
}