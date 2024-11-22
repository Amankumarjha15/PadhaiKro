import React from 'react'

// import {Swiper, SwiperSlide} from "swiper/react"
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// // import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper'


// import { Navigation, Pagination ,FreeMode } from 'swiper/modules';








import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../../App.css';

// import required modules
import { Navigation , Autoplay } from 'swiper/modules';











import Course_Card from './Course_Card'

const CourseSlider = ({Courses}) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
         slidesPerView={1}
         spaceBetween={250}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
    //      modules={[FreeMode, Pagination , Navigation]}
    //       breakpoints={{
    //       1024: {
    //    slidesPerView: 3,
    //         },
    //   }}
    // className="max-h-[30rem]"
    navigation={true} modules={[Navigation ,Autoplay]} className="mySwiper p-20" pagination={{dynamicBullets:true}} 
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
