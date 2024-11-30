import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Highlight from '../components/home/Highlight';
import Button from '../components/home/Button';

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
            <Button active={true} link={"/signup"}>Learn More</Button>
            <Button active={false} link={"/login"}>Book a demo</Button>
           </div>

        </div>




        {/* section 2 */}




    </div>
  )
}

export default Home