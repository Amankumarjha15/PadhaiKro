import React from 'react'
import instructor from "../../assets/Images/Instructor.png"
import Highlight from './Highlight'
import Button from './Button'

function InstructorSection() {
  return (
    <div className='mt-16'>
        <div className="flex flex-row gap-20 items-center">
            <div className="w-[45%]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <img  src={instructor} alt="" />
            </div>



            <div className="w-[45%] flex flex-col gap-10 max-w-maxContent">
                <div className='text-white text-4xl font-semibold'>
                    Become An <Highlight text={"Instructor"}/>
                </div>
                <p className='text-sm text-richblack-300 font-semibold'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                <Button text={"Start Teaching Today"} active={true} link={"/signup"}/>
            </div>

        </div>

    </div>
  )
}

export default InstructorSection