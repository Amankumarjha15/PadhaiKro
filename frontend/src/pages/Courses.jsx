import React, { useEffect, useState } from 'react'
import { getAllCourses } from '../services/operations/courseDetailsAPI';
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import toast from 'react-hot-toast';
import Course_Card from "../components/Coursepage/Course_Card"
import Error from './Error';
import CourseSlider from '../components/Coursepage/CourseSlider';
import { Link } from 'react-router-dom';

function Courses() {
    const [loading , setLoading] = useState(false);
    const [Data , setData] = useState([]);
    const [catData , setCatData] = useState(null);


    const setCourseData = async() =>{
       const response = await getAllCourses();
       setData(response);
    }

    const getCategories = async () => {
        try{
            const res = await apiConnector("GET",categories.CATEGORIES_API);
            setCatData(res);

        }catch(error){
            toast.error(error.message);
        }
    }



    useEffect(()=>{
        setLoading(true);
        setCourseData();
        getCategories();
        setLoading(false);

    },[])

  console.log("data" , Data);
  console.log("datacat" , catData);

  if (loading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
//   if (loading && !Data.success) {
//     return <Error />
//   }


  return (
        <div className='text-white w-full'>
        <div className='bg-richblack-800 w-full h-[300px] flex  items-center'>
          <div className="w-11/12 mx-auto">
             <h1 className='text-blue-100 font-bold text-4xl my-4'>Courses</h1>
             <h2 className='text-richblack-100 font-bold text-xl'><Link to={"/"}><span className='text-richblack-300 font-bold text-xl'>Home /</span> </Link>Courses</h2>
             </div>
        </div>

<div className="w-11/12 mx-auto my-16">
        <h1 className='text-center my-16 text-4xl font-bold text-richblack-400'>Our Top Selling Courses</h1>
        <div className="">  <CourseSlider Courses={Data}/></div>
</div>
      


        <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="text-4xl text-center text-richblack-400 font-bold">Our Courses</div>
            <div className="py-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {Data.map((course, i) => (
                    <Course_Card course={course} key={i} Height={"h-[400px]"} />
                  ))}
              </div>
            </div>
          </div>


    </div>
 
  )
}

export default Courses