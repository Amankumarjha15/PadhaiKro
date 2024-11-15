const user = require("../models/User");
const tag = require("../models/Category");
const course = require("../models/Course");
const {uploadImageToCloudinary} = require("../utils/imageUploader");
const User = require("../models/User");


exports.createCourse = async (req , res) => {
    try{
        const {courseName , courseDescription , whatYouWillLearn , price , tag} = req.body;

        const thumbnail = req.files.thumbnailaImage;

        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail){
              return res.json({
                sucess:false,
                message:"All fields are Required",
              })
        }

        const userId = req.user.id;
        
        const instructorDetails = await user.findById(userId);
        console.log("instructor" , instructorDetails);

        if(!instructorDetails){
            return res.stsus(404).json({
                sucess:false,
                message:"Instructor Not Found",
            })
        }

        const tagDeatils = await tag.findById(tag);
        if(!tagDeatils){
            return res.stsus(404).json({
                sucess:false,
                message:"Tag Not Found",
            })
        }

        const thumbnailImage = await uploadImageToCloudinary(thumbnail , process.env.FOLDER_NAME);

        const newCourse = await course.create({
            courseName,
            courseDescription,
            instructor: instructorDetails._id,
            whatYouWillLearn,
            price,
            tag:tagDeatils._id,
            thumbnail:thumbnailImage.secure_url,
        })

        await user.findByIdAndUpdate({_id: instructor._id},
                {
                    $push: {
                        courses:newCourse._id,
                    }
                },{new:true},
            );
         
        await tag.findByIdAndUpdate({_id : tagDeatils._id},
            {
                $push : {
                    courses:newCourse._id,
                }
            },
            {new:true},
        )

        return res.status(200).json({
            sucess:true,
            message:"Course created sucessfully",
            data:newCourse,
        })


    }catch(error){

        return res.status(500).json({
            sucess:false,
            message:"Error in Create Course Handler/controller",
        })

    }
}



exports.allCourses = async (res,req) => {
    try{

        const allCourses = await course.find({},{courseName:true,
            price:true,thumbnail:true,instructor:true,ratingAndReviews:true,studentEnrolled:true,
        }).populate("instructor").exec();


        return res.status(200).json({
            sucess:true,
            message:"All course data fetch sucessfully",
            data:allCourses,
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            sucess:true,
            message:"Error In Fetching All Courses Data",
            error:error.message,
        })
    }
}



exports.getCourseDetails = async (req , res) => {
    try{
        const {courseId} = req.body;

        const courseDetails = await course.find({_id:courseId}).populate({path:"instructor",populate:{path:"additionalDetails"}}).populate("category").populate("ratingAndReviews").populate({path:"courseContent",populate:{path:"subSection"}}).exec();

        if(!courseDetails){
            return res.status(400).json({
                sucess:false,
                message:"Could not find the course data!!!",
            })
        }
       

        return res.status(200).json({
            sucess:true,
            message:"Course data fetched sucessfully",
            data: courseDetails,
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            sucess:true,
            message:"Error In Fetching course details",
            error:error.message,
        }) 
    }
}