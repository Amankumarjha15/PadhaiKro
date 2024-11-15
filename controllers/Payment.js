const {instance} =require("../config/razorpay");
const User =require("../models/User");
const Course =require("../models/Course");
const mailSender = require("../utils/mailSender");
const {courseEnrollmentEmail} =require("../mail/CourseEnrollment");
const { default: mongoose } = require("mongoose");




exports.capturePayment = async (req , res) => {
   
        const {course_id} =req.body;
        const userId = req.user.id;

        if(!course_id){
            return res.json({
                sucess:false,
                message:"PLease provide vaild course ID",
            })
        };

        let course; 

        try{
            course = await Course.findById(course_id);
            if(!course){
                return res.json({
                    sucess:false,
                    message:"Could not find the course",
                })
            }


            const uid = new mongoose.Types.ObjectId(userId);

            // yha pr hum userid direct le skte the agr testing m dikkt aaya to direct userid pr validation lga lenge 

            if(course.studentEnrolled.includes(uid)){
                return res.status(200).json({
                    sucess:false,
                    message:"Student is Already enrolled in this course",
                })
            };


        }catch(error){
            console.log("Error in Capture Payment controller");
            return res.status(500).json({
                sucess:false,
                message:"Something went wrong while geting course details",
                error:error.message,
            })
    

        }


        const amount = course.price;
        const currency = "INR";


        const options ={
            amount:amount*100,
            currency:"INR",
            reciept: Math.random(Date.now()).toString(),
            notes:{
                course_id :course_id,
                userId,
            }
        }


        try{

            const paymentResponse = await instance.orders.create(options);
            console.log(paymentResponse);


            return res.json({
                sucess:true,
                coursename: course.courseName,
                courseDescription: course.courseDescription,
                thumnail : course.thumbnail,
                orderId : paymentResponse.id,
                currency:paymentResponse.currency,
                amount:paymentResponse.amount,
            })



        }catch(error){
             console.log(error.message);
             return res.status(500).json({
                  sucess:false,
                  message:"payment not initiated",
                  error:error.message,
             })

        }
}





exports.verifySignature = async (req, res) => {

    const webhookSecret = "12345678";
    
    const signature = req.headers["x-razorpay-signature"];
    
    
    const shasum = crypto.createHmac("sha256", webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");
    
    if (signature === digest) {
    
    console.log("Payment is Authorised");
    
    const {courseId, userId} = req.body.payload.payment.entity.notes;
    
    try{
     const enrolledCourse = await Course.findOneAndUpdate(
                                            {id: courseId},
                                            {$push: {studentsEnrolled: userId}},
                                            {new:true},)
    
        if(!enrolledCourse) {
        return res.status(500).json({
        sucess:false,
        message: 'Course not Found',
        })
        };
    
        console.log("enrolled Course",enrolledCourse);


            const enrolledStudent = await User.findOneAndUpdate(
            {id:userId},
            {$push: {courses:courseId}},    
            {new:true},
            );


              console.log(enrolledStudent);

              const emailResponse = await mailSender(enrolledStudent.email,"Congratulation From StudyNotion","Congratulation you are enrolled in the course");


              return res.status(200).json({
                sucess:true,
                message:"Course added sucessfull and sended mail sucecssfully!!!",
              })


    }catch(error){

        console.log(error.message);
        return res.status(500).json({
            sucess:false,
            message:"payment not verified from studynotion razorpay",
        })

    }
}else{
    return res.status(400).json({
        sucess:false,
        message:"Invalid request",
    })
}


}