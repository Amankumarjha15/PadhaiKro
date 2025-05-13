import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Highlight from '../components/home/Highlight';
import Button from '../components/home/Button';
import CodeBlocks from '../components/home/CodeBlocks';
import ExploreMore from '../components/home/ExploreMore';
import ReviewSlider from "../components/common/ReviewSlider"
import { getAllInstructorData } from '../services/operations/profileAPI';


import { FaPlayCircle, FaLaptop, FaCertificate, FaUserGraduate } from "react-icons/fa";









import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { Navigation , Autoplay } from 'swiper/modules';






function Home() {
  const [Instructor, setInstructor] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  

    
      useEffect(() => {
        ;(async () => {
         
          const instructorApiData = await getAllInstructorData()
       // console.log(instructorApiData);
          setInstructor(instructorApiData);
          
        })()
      }, [])



  
  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };



  return (
    <div>



       

       {/* hero section  */}





    <div className="relative overflow-hidden bg-richblack-600">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-richblack-400 to-richblack-900 opacity-95 z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main hero content */}
      <div className="relative min-h-screen flex items-center z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-6">
                Transform Your Future With Our Courses
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Discover Your <span className="text-yellow-400">Potential</span> With Expert-Led Learning
              </h1>
              <p className="text-lg text-richblack-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Access over 1,000 high-quality courses taught by industry experts. Learn at your own pace and achieve your career goals.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg"
                  onClick={() => window.location.href = '/courses'}
                >
                  Explore Courses <FaArrowRight className="ml-2" />
                </button>
                <button 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
                  onClick={handleWatchVideo}
                >
                  <FaPlayCircle className="mr-2" /> Watch Video
                </button>
              </div>
            </div>
            
            {/* Right side - Features cards */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature cards */}
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:bg-opacity-30 transition-all duration-300">
                    <FaLaptop className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Online Learning</h3>
                  <p className="text-gray-100">Learn anytime, anywhere with our flexible online courses designed for busy professionals.</p>
                </div>
                
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                  <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:bg-opacity-30 transition-all duration-300">
                    <FaCertificate className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Certification</h3>
                  <p className="text-gray-100">Receive industry-recognized certifications to enhance your career opportunities.</p>
                </div>
                
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                  <div className="bg-green-500 bg-opacity-20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:bg-opacity-30 transition-all duration-300">
                    <FaUserGraduate className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Expert Mentors</h3>
                  <p className="text-gray-100">Learn from industry experts who provide personalized guidance throughout your journey.</p>
                </div>
                
                {/* Stats box */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 flex flex-col justify-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  <div className="mb-4">
                    <div className="flex flex-col">
                      <span className="text-4xl font-bold text-white">30K+</span>
                      <span className="text-blue-200">Happy Students</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-col">
                      <span className="text-4xl font-bold text-white">1000+</span>
                      <span className="text-blue-200">Courses</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <span className="text-4xl font-bold text-white">4.9</span>
                      <span className="text-blue-200">Rating</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating award badge */}
              <div className="absolute -top-6 -right-6 bg-yellow-500 text-gray-900 rounded-full h-24 w-24 flex flex-col items-center justify-center text-center p-2 shadow-xl border-4 border-white transform rotate-12">
                <span className="text-xs font-bold">AWARD</span>
                <span className="text-xs font-bold">WINNING</span>
                <span className="text-xs font-bold">COURSES</span>
              </div>
            </div>
          </div>
          
          {/* Trusted by companies */}
          <div className="mt-20 py-10 border-b border-t border-white border-opacity-20">
            <p className="text-center text-gray-300 mb-6 text-sm">TRUSTED BY LEADING COMPANIES</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="text-white text-xl font-bold">Google</div>
              <div className="text-white text-xl font-bold">Microsoft</div>
              <div className="text-white text-xl font-bold">Amazon</div>
              <div className="text-white text-xl font-bold">IBM</div>
              <div className="text-white text-xl font-bold">Apple</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-4xl">
            <button 
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
              onClick={handleCloseVideo}
            >
              &times; Close
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-96 rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Promotional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
   

   
    </div>








        
        {/* section 1  */}


        {/* <div className='relative max-w-maxContent mx-auto flex flex-col w-11/12 items-center text-white justify-between'>

           <Link to={"/signup"}>
              
              <div className='group mt-16 p-2 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row gap-3 items-center rounded-full px-10 py-2 transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become an instructor</p> <FaArrowRight />
                </div>
              </div>
           </Link>












           <div className='text-center text-4xl font-semibold mt-4'>Empower Your Future With <Highlight text={"Coding Skills"} /> </div>

           <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
           With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
           </div>

           <div className="flex flex-row my-8 gap-7">
            <Button active={true} link={"/about"} text={"Learn More"}></Button>
            <Button active={false} link={"/contact"} text={"Book a demo"}></Button>
           </div>
        

           <div>
            <CodeBlocks
            position={"row"} 

            heading={<div className='text-3xl font-semibold'>
              Unlock Your<Highlight text={"Coding Potiential"}/> With Our Courses.
            </div>}

            subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
            
            btn1={{
              text:"Try it",
              link:"/courses",
              active:true,
            }}

            btn2={{
              text:"Learn more",
              link:"/about",
              active:false,
            }}

            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}

            codecolor={"yellow-25"}

            backgroundgradient={<div className="codeblock1 absolute"></div>}
            
            ></CodeBlocks>
           </div>


          

           <div>
            <CodeBlocks
            position={"flex-row-reverse"} 

            heading={<div className='text-3xl font-semibold'>
              Start Coding<Highlight text={"In Seconds"}/> With Our Courses.
            </div>}

            subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
            
            btn1={{
              text:"Courses",
              link:"/courses",
              active:true,
            }}

            btn2={{
              text:"Learn more",
              link:"/about",
              active:false,
            }}

            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}

            codecolor={"blue-25"}

            backgroundgradient={<div className="codeblock2 absolute"></div>}
            ></CodeBlocks>
           </div>












         <ExploreMore/>




        </div>




















       

        <div className="bg-white text-richblack-700 h-[200px] md:h-[400px] flex items-center mx-auto">
             <div className="w-11/12 max-w-maxContent justify-center flex gap-5 mx-auto text-white">
                <Button text={'Explore Courses'} active={true} link={"/courses"}/>
                <Button text={'Learn More'} active={false} link={"/about"}/>
             </div>
        </div> */}




















        {/* section 3 */}


      <div className="w-full mx-auto flex flex-col items-center justify-between gap-10 bg-gradient-to-b from-richblack-400 to-richblack-900  border-t border-white border-opacity-60">





       <div className="w-11/12 mt-10">
                      <h1 className='text-4xl font-bold text-white text-center my-10'>Our<span className='text-yellow-300'> Instructors</span> </h1>
                      <Swiper
                      slidesPerView={1}
                      spaceBetween={250}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                     disableOnInteraction: false,
                    }}
                  //      modules={[FreeMode, Pagination , Navigation]}
                  //       breakpoints={{
                  //       1024: {
                  //    slidesPerView: 3,
                  //         },
                  //   }}
                  // className="max-h-[30rem]"
                  modules={[Navigation ,Autoplay]} className="mySwiper  p-5 md:p-20 bg-richblack-200 rounded-3xl hover:scale-95 duration-500 bg-gradient-to-t from-white to-gray-100" pagination={{dynamicBullets:true}} 
                      >
                        {Instructor?.map((Instructors, i) => (
                          <SwiperSlide key={i}>
                              <>
                              <div className="w-full flex lg:flex-row flex-col">
                                <div className="lg:w-[50%] w-full"><img src={Instructors.image} alt="instructor" className='rounded-3xl'/></div>
                                <div className="lg:w-[50%] w-full text-black p-10 flex flex-col gap-10">
                                  <h1 className='md:text-4xl font-bold font-edu-sa'>{Instructors.firstName} {Instructors.lastName}</h1>
                                  <p className='md:text-xl font-medium text-black/90 line-clamp-6 md:line-clamp-none'>{Instructors.additionalDetails.about}</p>

                                </div>
                              </div>
                              </>
                          </SwiperSlide>
                        ))}
                      </Swiper>
        </div>















        
        {/* <InstructorSection/> */}


        <h1 className='text-center text-4xl font-bold text-white'>Reviews <span className='text-yellow-300'>From Other Learners</span></h1>
        <div className="w-11/12 my-10">
        <ReviewSlider></ReviewSlider>
        </div> 
               
        
        </div>


















    </div>
  )
}

export default Home