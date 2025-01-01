import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../index.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"








function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    ;(async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  console.log(reviews)

  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
         //slidesPerView={3}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}

          breakpoints={{
            // When the screen width is >= 640px
           
            640 : {
              slidesPerView: 3,
            },
             0: {
              slidesPerView: 1,
            },
          }}

          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full swiper  bg-richblack-400 rounded-3xl px-5"
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="w-full flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 rounded-2xl">
                  <div className="flex items-center gap-4">
                    {/* <img
                      className="h-9 w-9 rounded-full object-cover"
                      src={review?.user?.image}
                      alt=""
                    /> */}
                    <div className="h-9 w-9 rounded-full object-cover">
                    <img src=  {
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      } alt="user image"  className="rounded-full" />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5 line-clamp-1 md:line-clamp-none">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500 line-clamp-1 md:line-clamp-none">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25 line-clamp-2 md:line-clamp-none">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review}`}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider