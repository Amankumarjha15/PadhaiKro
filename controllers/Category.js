const tag = require("../models/Category");

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }




exports.createCategory = async (res, req) => {
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


exports.showAllCategories = async(res , req) => {
    try{

        const allCategory = await tag.find({},{name:true});

        return res.status(200).json({
            sucess:true,
            message:"All Tags Are Here",
            data:allCategory,
        })

    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:`Error in show all tag handler/controller : ${error.message}`,
        })
    }
}


exports.categoryPageDetails = async (req, res) => {
    try {
      const { categoryId } = req.body
      console.log("PRINTING CATEGORY ID: ", categoryId);
      // Get courses for the specified category
      const selectedCategory = await tag.findById(categoryId)
        .populate({
          path: "courses",
          match: { status: "Published" },
          populate: "ratingAndReviews",
        })
        .exec()
  
      //console.log("SELECTED COURSE", selectedCategory)
      // Handle the case when the category is not found
      if (!selectedCategory) {
        console.log("Category not found.")
        return res
          .status(404)
          .json({ success: false, message: "Category not found" })
      }
      // Handle the case when there are no courses
      if (selectedCategory.course.length === 0) {
        console.log("No courses found for the selected category.")
        return res.status(404).json({
          success: false,
          message: "No courses found for the selected category.",
        })
      }
  
      // Get courses for other categories
      const categoriesExceptSelected = await tag.find({
        _id: { $ne: categoryId },
      })
      let differentCategory = await tag.findOne(
        categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
          ._id
      )
        .populate({
          path: "courses",
          match: { status: "Published" },
        })
        .exec()
        //console.log("Different COURSE", differentCategory)
      // Get top-selling courses across all categories
      const allCategories = await tag.find()
        .populate({
          path: "courses",
          match: { status: "Published" },
          populate: {
            path: "instructor",
        },
        })
        .exec()
      const allCourses = allCategories.flatMap((category) => category.course)
      const mostSellingCourses = allCourses
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 10)
       // console.log("mostSellingCourses COURSE", mostSellingCourses)
      res.status(200).json({
        success: true,
        data: {
          selectedCategory,
          differentCategory,
          mostSellingCourses,
        },
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }