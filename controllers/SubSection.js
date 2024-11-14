const subSection = require("../models/SubSection");
const section = require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();


exports.createSubSection = async (req,res) => {
       try{
        const {sectionId , timeDuration , title , description} = req.body;
        const video = req.files.videoFile;

        if(!sectionId || !timeDuration || !title || !description || !video){
            return res.status(400).json({
                sucess:false,
                message:"All fields are required",
            })
        }

        const uploadDetails = await uploadImageToCloudinary(video , process.env.FOLDER_NAME);


        const subSectionDetails = await subSection.create({
            title:title,
            description:description,
            timeDuration:timeDuration,
            videoUrl:uploadDetails.secure_url,
        })

        const updatedSection = await section.findByIdAndUpdate(sectionId , {$push:{subSection:subSectionDetails._id}},{new:true}).populate("subSection").exec();

        return res.status(200).json({
            sucess:true,
            message:"Subsection Created Sucessfully",
            updatedSection,
        })



       }catch(error){

        return res.status(500).json({
            sucess:false,
            message:"Something Went Worng In Creating Subsection",
            error:error.message,
        })

       }
}