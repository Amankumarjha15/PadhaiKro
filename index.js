const express = require("express");

const app = express();



const userRoutes = require("./routes/User");
const courseRoutes = require("./routes/Course");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");


const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUplaod = require("express-fileupload");
require("dotenv").config();


const PORT = process.env.PORT || 4000;


database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:3000",credentials:true}));


app.use(fileUplaod({useTempFiles:true, tempFileDir:"/temp"}));

cloudinaryConnect();


app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);


app.listen(PORT,()=>{console.log(`App is running at ${PORT} port`);})

app.get("/",(req,res)=>{

    console.log("Server is up");
    return res.status(200).json({
        sucess:true,
        message:"Your server is up"
    })
})




