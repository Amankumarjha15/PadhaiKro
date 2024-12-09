import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Highlight from '../components/home/Highlight';
import Button from '../components/home/Button';
import banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../components/home/CodeBlocks';
import InstructorSection from '../components/home/InstructorSection';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/home/ExploreMore';

function Home() {
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

           <div className="flex flex-row mt-8 gap-7">
            <Button active={true} link={"/signup"} text={"Learn More"}></Button>
            <Button active={false} link={"/login"} text={"Book a demo"}></Button>
           </div>
           
           <div className='shadow-blue-200 my-12 mx-10'>
             
           {/* <video muted loop autoPlay><source src={banner} type='video/mp4'></source></video> */}

           </div>

           {/* codesection1 */}

           <div>
            <CodeBlocks
            position={"flex-row"} 

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

        <div className="bg-white text-richblack-700 h-[400px] flex items-center mx-auto">
             <div className="w-11/12 max-w-maxContent justify-center flex gap-5 mx-auto text-white">
                <Button text={'Explore Courses'} active={true} link={"/signup"}/>
                <Button text={'Learn More'} active={false} link={"/signup"}/>
             </div>
        </div>




        {/* section 3 */}


        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-10 bg-richblack-900">
        
        <InstructorSection/>


        <h1 className='text-4xl font-bold text-white mt-10'>Reviews From Other Learners</h1>
        
        
        
        
        </div>


















    </div>
  )
}

export default Home