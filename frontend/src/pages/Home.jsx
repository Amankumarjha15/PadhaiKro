import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Highlight from '../components/home/Highlight';
import Button from '../components/home/Button';
import CodeBlocks from '../components/home/CodeBlocks';
import ExploreMore from '../components/home/ExploreMore';
import ReviewSlider from "../components/common/ReviewSlider"
import { getAllInstructorData } from '../services/operations/profileAPI';








import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { Navigation , Autoplay } from 'swiper/modules';






function Home() {
  const [Instructor, setInstructor] = useState([]);


    
      useEffect(() => {
        ;(async () => {
         
          const instructorApiData = await getAllInstructorData()
          console.log(instructorApiData);
          setInstructor(instructorApiData);
          
        })()
      }, [])



  return (
    <div>
        
        {/* section 1  */}
        <div className='relative max-w-maxContent mx-auto flex flex-col w-11/12 items-center text-white justify-between'>

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
           
           {/* <div className='shadow-blue-200'>
             
            <video muted loop autoPlay><source src={banner} type='video/mp4'></source></video>

           </div>  */}

           {/* codesection1 */}

           <div>
            <CodeBlocks
            position={"row"} 

            heading={<div className='text-3xl font-semibold'>
              Unlock Your<Highlight text={"Coding Potiential"}/> With Our Courses.
            </div>}

            subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
            
            btn1={{
              text:"Try it",
              link:"/signup",
              active:true,
            }}

            btn2={{
              text:"Learn more",
              link:"/login",
              active:false,
            }}

            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}

            codecolor={"yellow-25"}

            backgroundgradient={<div className="codeblock1 absolute"></div>}
            
            ></CodeBlocks>
           </div>


           
           {/* codesection2 */}

           <div>
            <CodeBlocks
            position={"flex-row-reverse"} 

            heading={<div className='text-3xl font-semibold'>
              Start Coding<Highlight text={"In Seconds"}/> With Our Courses.
            </div>}

            subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
            
            btn1={{
              text:"Courses",
              link:"/signup",
              active:true,
            }}

            btn2={{
              text:"Learn more",
              link:"/login",
              active:false,
            }}

            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}

            codecolor={"blue-25"}

            backgroundgradient={<div className="codeblock2 absolute"></div>}
            ></CodeBlocks>
           </div>


          {/* anothersection in section 1 */}

         <ExploreMore/>




        </div>




        {/* section 2 */}

        <div className="bg-white text-richblack-700 h-[200px] md:h-[400px] flex items-center mx-auto">
             <div className="w-11/12 max-w-maxContent justify-center flex gap-5 mx-auto text-white">
                <Button text={'Explore Courses'} active={true} link={"/courses"}/>
                <Button text={'Learn More'} active={false} link={"/about"}/>
             </div>
        </div>




        {/* section 3 */}


      <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-10 bg-richblack-900">





       <div className="w-full mt-10">
                      <h1 className='text-4xl font-bold text-white text-center my-10'><Highlight text={"Our Instructors"}/></h1>
                      <Swiper
                      slidesPerView={1}
                      spaceBetween={250}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      // disableOnInteraction: false,
                    }}
                  //      modules={[FreeMode, Pagination , Navigation]}
                  //       breakpoints={{
                  //       1024: {
                  //    slidesPerView: 3,
                  //         },
                  //   }}
                  // className="max-h-[30rem]"
                  modules={[Navigation ,Autoplay]} className="mySwiper  p-5 md:p-20 bg-richblack-200 rounded-3xl" pagination={{dynamicBullets:true}} 
                      >
                        {Instructor?.map((Instructors, i) => (
                          <SwiperSlide key={i}>
                              <>
                              <div className="w-full flex md:flex-row flex-col">
                                <div className="md:w-[50%] w-full"><img src={Instructors.image} alt="instructor" className='rounded-3xl'/></div>
                                <div className="md:w-[50%] w-full text-black p-10 flex flex-col gap-10">
                                  <h1 className='md:text-4xl font-bold'>{Instructors.firstName} {Instructors.lastName}</h1>
                                  <p className='md:text-xl font-semibold line-clamp-5 md:line-clamp-none'>{Instructors.additionalDetails.about}</p>

                                </div>
                              </div>
                              </>
                          </SwiperSlide>
                        ))}
                      </Swiper>
        </div>















        
        {/* <InstructorSection/> */}


        <h1 className='text-center text-4xl font-bold text-white'>Reviews <Highlight text={"From Other Learners"}/></h1>
        <div className="w-11/12">
        <ReviewSlider></ReviewSlider>
        </div> 
               
        
        </div>


















    </div>
  )
}

export default Home