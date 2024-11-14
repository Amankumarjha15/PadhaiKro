const tag = require("../models/Tags");


exports.createTag = async (res, req) => {
    try{

        const {name , description} = req.body;

        if(!name || !description){
            return res.json({
                  sucess:false,
                  message:"All field are required fill all the details",
            })
        };

        const Tag = await tag.create({
            name:name,
            description:description,
        });

        console.log(Tag);

        return res.status(200).json({
            sucess:true,
            message:"Tag created sucessfully",
        })

    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:`Error in create tag handler/controller : ${error.message}`,
        })
    }
}


exports.showAllTags = async(res , req) => {
    try{

        const alltags = await tag.find({},{name:true , description:true});

        return res.status(200).json({
            sucess:true,
            message:"All Tags Are Here",
            alltags,
        })

    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:`Error in show all tag handler/controller : ${error.message}`,
        })
    }
}