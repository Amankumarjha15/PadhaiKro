const section = require("../models/Section");
const course = require("../models/Course");
const subSection = require("../models/SubSection");


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
        (courseId , {$push:{courseContent:newSection._id}},{new:true}).populate({path:"courseContent",populate:{path:"subSection"}}).exec();


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

        const {sectionName , sectionId , courseId} = req.body;
        
        if(!sectionName || !sectionId){
            return res.json({
                sucess:false,
                message:"Sent all Details Correctly",
            })
        };

        const Section = await section.findByIdAndUpdate(sectionId , {sectionName},{new:true});


        // return res.status(200).json({
        //     sucess:true,
        //     message:"Section updated sucessfully",
        // })


        const course = await course.findById(courseId)
		.populate({
			path:"courseContent",
			populate:{
				path:"subSection",
			},
		})
		.exec();

		res.status(200).json({
			success: true,
			message: section,
			data:course,
		});


    }catch(error){
            console.log(error.message);
            return res.status(500).json({
                sucess:false,
                message:"Something Went Wrong While updating Section",
                error:error.message,
            });
    }
}


// exports.deleteSection = async (res , req) => {
//     try{

//         // get ID - assuming we are getting id by params from frontend
//         const {sectionId} =req.params;

//         await section.findByIdAndDelete(sectionId);


//         // testing k time check krna hai k mujhe course k schema m se bhi delete krna hai id section ka

//         return res.status(200).json({
//             sucess:true,
//             message:"Sucessfully deleted section",
//         })

//     }catch(error){
//         console.log(error.message);
//         return res.status(500).json({
//             sucess:false,
//             message:"Something Went Wrong While Deleting Section",
//             error:error.message,
//         });
//     }
// }



exports.deleteSection = async (req, res) => {
	try {

		const { sectionId, courseId }  = req.body;
		await course.findByIdAndUpdate(courseId, {
			$pull: {
				courseContent: sectionId,
			}
		})
		const section = await section.findById(sectionId);
		console.log(sectionId, courseId);
		if(!section) {
			return res.status(404).json({
				success:false,
				message:"Section not Found",
			})
		}

		//delete sub section
		await subSection.deleteMany({_id: {$in: section.subSection}});

		await section.findByIdAndDelete(sectionId);

		//find the updated course and return 
		const course = await course.findById(courseId).populate({
			path:"courseContent",
			populate: {
				path: "subSection"
			}
		})
		.exec();

		res.status(200).json({
			success:true,
			message:"Section deleted",
			data:course
		});
	} catch (error) {
		console.error("Error deleting section:", error);
		res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};   