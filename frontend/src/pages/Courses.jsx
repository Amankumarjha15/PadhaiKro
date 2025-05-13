// import React, { useEffect, useState } from 'react'
// import { getAllCourses } from '../services/operations/courseDetailsAPI';
// import { apiConnector } from '../services/apiconnector';
// import { categories } from '../services/apis';
// import toast from 'react-hot-toast';
// import Course_Card from "../components/Coursepage/Course_Card"
// import Error from './Error';
// import CourseSlider from '../components/Coursepage/CourseSlider';
// import { Link } from 'react-router-dom';

// function Courses() {
//     const [loading , setLoading] = useState(false);
//     const [Data , setData] = useState([]);
//     const [catData , setCatData] = useState(null);


//     const setCourseData = async() =>{
//        const response = await getAllCourses();
//        setData(response);
//     }

//     const getCategories = async () => {
//         try{
//             const res = await apiConnector("GET",categories.CATEGORIES_API);
//             setCatData(res);

//         }catch(error){
//             toast.error(error.message);
//         }
//     }



//     useEffect(()=>{
//         setLoading(true);
//         setCourseData();
//         getCategories();
//         setLoading(false);

//     },[])

//  // console.log("data" , Data);
//  // console.log("datacat" , catData);

//   if (loading) {
//     return (
//       <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//         <div className="spinner"></div>
//       </div>
//     )
//   }
// //   if (loading && !Data.success) {
// //     return <Error />
// //   }


//   return (
//         <div className='text-white w-full'>
//         <div className='bg-richblack-800 w-full h-[300px] flex  items-center'>
//           <div className="w-11/12 mx-auto">
//              <h1 className='text-blue-100 font-bold text-4xl my-4'>Courses</h1>
//              <h2 className='text-richblack-100 font-bold text-xl'><Link to={"/"}><span className='text-richblack-300 font-bold text-xl'>Home /</span> </Link>Courses</h2>
//              </div>
//         </div>

// <div className="w-11/12 mx-auto my-16">
//         <h1 className='text-center my-16 text-4xl font-bold text-richblack-400'>Our Top Selling Courses</h1>
//         <div className="">  <CourseSlider Courses={Data}/></div>
// </div>
      


//         <div className=" mx-auto box-content w-11/12 max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//             <div className="text-4xl text-center text-richblack-400 font-bold">Our Courses</div>
//             <div className="py-8">
//               <div className="grid grid-cols-1 md:gap-6 lg:grid-cols-2">
//                 {Data.map((course, i) => (
//                     <Course_Card course={course} key={i} Height={"h-[400px]"} />
//                   ))}
//               </div>
//             </div>
//           </div>


//     </div>
 
//   )
// }

// export default Courses






























import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../services/operations/courseDetailsAPI';
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import toast from 'react-hot-toast';
import { ChevronLeft, ChevronRight, Star, Users, Clock, BookOpen } from 'lucide-react';
import GetAvgRating from '../utils/avgRating';

// Course Card Component
const CourseCard = ({ course, height = "h-80" }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);
 console.log(course)

  return (
    <a href={`/courses/${course._id}`}>
      <div className="bg-richblack-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]">
        <div className="relative">
          <img
            src={course?.thumbnail}
            alt={course?.courseName}
            className={`${height} w-full object-cover`}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
              ₹{course?.price}
            </span>
          </div>
          {avgReviewCount > 4.5 && (
            <div className="absolute top-4 right-4">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                BEST SELLER
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
            {course?.courseName}
          </h3>
          
          <p className="text-richblack-300 text-sm mb-3">
            By {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={`${
                    index < Math.floor(avgReviewCount)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-yellow-400 text-sm">{avgReviewCount.toFixed(1)}</span>
            <span className="text-richblack-400 text-sm">
              ({course?.ratingAndReviews?.length} reviews)
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-richblack-400 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{course?.studentsEnrolled?.length || 0} students</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              <span>{course?.category?.name}</span>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </a>
  );
};

// Custom Slider Component
const CustomSlider = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  
  // Auto-slide functionality
  useEffect(() => {
    if (!courses || courses.length === 0) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentIndex, courses]);
  
  const nextSlide = () => {
    if (isAnimating || !courses?.length) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(courses.length / slidesToShow));
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  const prevSlide = () => {
    if (isAnimating || !courses?.length) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => 
      prev === 0 ? Math.ceil(courses.length / slidesToShow) - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  if (!courses || courses.length === 0) {
    return (
      <div className="text-center text-richblack-400 py-16">
        <p className="text-xl">No courses available</p>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className={`flex transition-transform duration-300 ${isAnimating ? 'opacity-50' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(courses.length / slidesToShow) }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex w-full flex-shrink-0 gap-6">
              {courses.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((course, index) => (
                <div key={course._id || index} className={`${slidesToShow === 1 ? 'w-full' : slidesToShow === 2 ? 'w-1/2' : 'w-1/3'} flex-shrink-0`}>
                  <CourseCard course={course} height="h-64" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {courses.length > slidesToShow && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300"
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(courses.length / slidesToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  currentIndex === index ? 'bg-blue-500' : 'bg-richblack-600'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Loading Spinner
const LoadingSpinner = () => (
  <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Main Courses Component
function Courses() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [catData, setCatData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const setCourseData = async () => {
    try {
      const response = await getAllCourses();
      setData(response);
    } catch (error) {
      toast.error("Failed to fetch courses");
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("Categories response:", res); // Debug log
      setCatData(res);
    } catch (error) {
      toast.error(error.message);
      console.error("Categories error:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([setCourseData(), getCategories()])
      .finally(() => setLoading(false));
  }, []);

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === 'All' 
    ? data 
    : data.filter(course => course.category?.name === selectedCategory);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full bg-richblack-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-richblack-800 to-richblack-700 w-full">
        <div className="w-11/12 mx-auto py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-white mb-6">
                Discover Amazing <span className="text-blue-400">Courses</span>
              </h1>
              <p className="text-xl text-richblack-200 mb-8">
                Explore our comprehensive collection of courses designed to help you achieve your learning goals.
              </p>
              <nav className="text-richblack-300 mb-4">
                <a href="/" className="hover:text-blue-400 transition">Home</a>
                <span className="mx-2">/</span>
                <span>Courses</span>
              </nav>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-richblack-600 rounded-full p-8">
                <BookOpen size={120} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Selling Courses Slider */}
      <div className="w-11/12 mx-auto my-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Top Selling Courses
        </h2>
        <CustomSlider courses={data.slice(0, 12)} />
      </div>

      {/* Categories Filter - Fixed version with proper checks */}
      {catData && (
        <div className="w-11/12 mx-auto mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-richblack-700 text-richblack-300 hover:bg-richblack-600'
              }`}
            >
              All Courses
            </button>
            {/* Fixed: Better handling of catData structure */}
            {catData?.data && Array.isArray(catData.data) && catData.data.map((category) => (
              <button
                key={category._id || category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-richblack-700 text-richblack-300 hover:bg-richblack-600'
                }`}
              >
                {category.name}
              </button>
            ))}
            {/* Fallback if catData has a different structure */}
            {catData && !catData.data && Array.isArray(catData) && catData.map((category) => (
              <button
                key={category._id || category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-richblack-700 text-richblack-300 hover:bg-richblack-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* All Courses Grid */}
      <div className="w-11/12 mx-auto pb-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {selectedCategory === 'All' ? 'All Courses' : `${selectedCategory} Courses`}
        </h2>
        
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course._id || index} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center text-richblack-400 py-16">
            <p className="text-xl">No courses found in this category</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-full py-16">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of students already learning with us</p>
          <a 
            href="/signup"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold text-lg transition duration-300 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Courses;