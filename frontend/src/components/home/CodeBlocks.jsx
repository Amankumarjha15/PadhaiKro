import React from 'react';
import Button from './Button';
import {TypeAnimation} from "react-type-animation"


function CodeBlocks({position , heading , subheading , btn1 , btn2 ,codeblock , backgroundgradient , codecolor}) {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>

        {/* section1 */}
     

     <div className="w-[50%] flex flex-col gap-10">
        {heading}
        <div className='text-richblack-300 font-bold'>
            {subheading}
        </div>

        <div className='flex gap-7 mt-7'>
           <Button active={btn1.active} link={btn1.link} text={btn1.text}></Button>
           <Button active={btn2.active} link={btn2.link} text={btn2.text}></Button>
        </div>



     </div>







     {/* section2 */}


     <div className='w-[50%] h-fit flex flex-row'>



            <div className="w-[10%] flex text-center flex-col  text-richblack-400 font-inter font-bold">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>


            <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codecolor}`}>
             <TypeAnimation sequence={[codeblock , 2000 , ""]} 
             repeat={Infinity} cursor={true}
             omitDeletionAnimation={true}
             style={
                {
                whiteSpace:"pre-line",
                display: "block",
                }
                 }></TypeAnimation>
            </div>





     </div>













    </div>
  )
}

export default CodeBlocks