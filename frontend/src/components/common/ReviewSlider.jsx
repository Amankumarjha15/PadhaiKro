// import React, { useEffect, useState } from "react"
// import ReactStars from "react-rating-stars-component"
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import "../../index.css"
// // Icons
// import { FaStar } from "react-icons/fa"
// // Import required modules
// import { Autoplay, FreeMode, Pagination } from "swiper/modules"

// // Get apiFunction and the endpoint
// import { apiConnector } from "../../services/apiconnector"
// import { ratingsEndpoints } from "../../services/apis"








// function ReviewSlider() {
//   const [reviews, setReviews] = useState([])
//   const truncateWords = 15

//   useEffect(() => {
//     ;(async () => {
//       const { data } = await apiConnector(
//         "GET",
//         ratingsEndpoints.REVIEWS_DETAILS_API
//       )
//       if (data?.success) {
//         setReviews(data?.data)
//       }
//     })()
//   }, [])

//  // console.log(reviews)

//   return (
//     <div className="text-white">
//       <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
//         <Swiper
//          //slidesPerView={3}
//           spaceBetween={25}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 1000,
//             disableOnInteraction: false,
//           }}

//           breakpoints={{
//             // When the screen width is >= 640px
           
//             640 : {
//               slidesPerView: 3,
//             },
//              0: {
//               slidesPerView: 1,
//             },
//           }}

//           modules={[FreeMode, Pagination, Autoplay]}
//           className="w-full swiper  bg-richblack-400 rounded-3xl px-5"
//         >
//           {reviews.map((review, i) => {
//             return (
//               <SwiperSlide key={i}>
//                 <div className="w-full flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 rounded-2xl">
//                   <div className="flex items-center gap-4">
//                     {/* <img
//                       className="h-9 w-9 rounded-full object-cover"
//                       src={review?.user?.image}
//                       alt=""
//                     /> */}
//                     <div className="h-9 w-9 rounded-full object-cover">
//                     <img src=  {
//                         review?.user?.image
//                           ? review?.user?.image
//                           : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
//                       } alt="user image"  className="rounded-full" />
//                     </div>
//                     <div className="flex flex-col">
//                       <h1 className="font-semibold text-richblack-5 line-clamp-1 md:line-clamp-none">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
//                       <h2 className="text-[12px] font-medium text-richblack-500 line-clamp-1 md:line-clamp-none">
//                         {review?.course?.courseName}
//                       </h2>
//                     </div>
//                   </div>
//                   <p className="font-medium text-richblack-25 line-clamp-2 md:line-clamp-none">
//                     {review?.review.split(" ").length > truncateWords
//                       ? `${review?.review
//                           .split(" ")
//                           .slice(0, truncateWords)
//                           .join(" ")} ...`
//                       : `${review?.review}`}
//                   </p>
//                   <div className="flex items-center gap-2 ">
//                     <h3 className="font-semibold text-yellow-100">
//                       {review.rating.toFixed(1)}
//                     </h3>
//                     <ReactStars
//                       count={5}
//                       value={review.rating}
//                       size={20}
//                       edit={false}
//                       activeColor="#ffd700"
//                       emptyIcon={<FaStar />}
//                       fullIcon={<FaStar />}
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             )
//           })}
//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default ReviewSlider






import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import API connector and endpoints
import { apiConnector } from "../../services/apiconnector";
import { ratingsEndpoints } from "../../services/apis";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const truncateWords = 20;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        );
        if (data?.success) {
          setReviews(data?.data);
        }
      } catch (error) {
        console.log("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
    
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<FaStar key={i} className="text-yellow-400 opacity-50" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 text-black rounded-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Students Say</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our students have to say about their learning experience and how our courses have helped them grow professionally.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, FreeMode]}
            className="testimonial-swiper"
          >
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <SwiperSlide key={review._id || index}>
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={
                            review?.user?.image
                              ? review.user.image
                              : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                          }
                          alt="User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {`${review?.user?.firstName || ''} ${review?.user?.lastName || ''}`}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {review?.course?.courseName || 'Course Student'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4 flex-grow">
                      <p className="text-gray-600 italic">
                        "{review?.review?.split(" ").length > truncateWords
                          ? `${review?.review
                              .split(" ")
                              .slice(0, truncateWords)
                              .join(" ")}...`
                          : review?.review}"
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex items-center">
                        <span className="text-gray-800 font-semibold mr-2">
                          {review?.rating?.toFixed(1) || '0.0'}
                        </span>
                        <div className="flex">
                          {renderStars(review?.rating || 0)}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-600 text-center">Loading reviews...</p>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ReviewSlider;