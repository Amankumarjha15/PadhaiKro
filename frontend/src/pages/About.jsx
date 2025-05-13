// import React from "react"

// import FoundingStory from "../assets/Images/FoundingStory.png"
// import BannerImage1 from "../assets/Images/aboutus1.webp"
// import BannerImage2 from "../assets/Images/aboutus2.webp"
// import BannerImage3 from "../assets/Images/aboutus3.webp"
// // import Footer from "../components/common/Footer"
import ContactFormSection from "../components/AboutPage/ContactFormSection"
// import LearningGrid from "../components/AboutPage/LearningGrid"
// import Quote from "../components/AboutPage/Quote"
// import StatsComponenet from "../components/AboutPage/Stats"
// import Highlight from "../components/home/Highlight"
// // import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from "../components/common/ReviewSlider"
// // import Footer from "../components/common/Footer"

// const About = () => {
//   return (
//     <div>
//       <section className="bg-richblack-700">
//         <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
//           <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
//             Driving Innovation in Online Education for a
//             <Highlight text={"Brighter Future"} />
//             <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
//               Padhai kro is at the forefront of driving innovation in online
//               education. We're passionate about creating a brighter future by
//               offering cutting-edge courses, leveraging emerging technologies,
//               and nurturing a vibrant learning community.
//             </p>
//           </header>
//           <div className="sm:h-[70px] lg:h-[150px]"></div>
//           <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
//             <img src={BannerImage1} alt="" />
//             <img src={BannerImage2} alt="" />
//             <img src={BannerImage3} alt="" />
//           </div>
//         </div>
//       </section>

//       <section className="border-b border-richblack-700">
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
//           <div className="h-[100px] "></div>
//           <Quote />
//         </div>
//       </section>

//       <section>
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
//           <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
//             <div className="my-24 flex lg:w-[50%] flex-col gap-10">
//               <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
//                 Our Founding Story
//               </h1>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 Our e-learning platform was born out of a shared vision and
//                 passion for transforming education. It all began with a group of
//                 educators, technologists, and lifelong learners who recognized
//                 the need for accessible, flexible, and high-quality learning
//                 opportunities in a rapidly evolving digital world.
//               </p>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 As experienced educators ourselves, we witnessed firsthand the
//                 limitations and challenges of traditional education systems. We
//                 believed that education should not be confined to the walls of a
//                 classroom or restricted by geographical boundaries. We
//                 envisioned a platform that could bridge these gaps and empower
//                 individuals from all walks of life to unlock their full
//                 potential.
//               </p>
//             </div>

//             <div>
//               <img
//                 src={FoundingStory}
//                 alt=""
//                 className="shadow-[0_0_20px_0] shadow-[#FC6767]"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
//             <div className="my-24 flex lg:w-[40%] flex-col gap-10">
//               <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
//                 Our Vision
//               </h1>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                 With this vision in mind, we set out on a journey to create an
//                 e-learning platform that would revolutionize the way people
//                 learn. Our team of dedicated experts worked tirelessly to
//                 develop a robust and intuitive platform that combines
//                 cutting-edge technology with engaging content, fostering a
//                 dynamic and interactive learning experience.
//               </p>
//             </div>
//             <div className="my-24 flex lg:w-[40%] flex-col gap-10">
//               <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
//               Our Mission
//               </h1>
//               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//               Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <StatsComponenet />
//       <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
//         <LearningGrid />
//         <ContactFormSection />
//       </section>

//       <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
//         {/* Reviws from Other Learner */}
//         <h1 className="text-center text-4xl font-semibold mt-8 text-blue-50">
//           Reviews from other learners
//         </h1>

//         {/* <ReviewSlider /> */}
//         <div className="w-11/12">
//         <ReviewSlider></ReviewSlider>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About

import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";

import React, { useState } from "react";
import {
  Star,
  Book,
  Users,
  Globe,
  Heart,
  Zap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Target,
} from "lucide-react";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Aarav Sharma",
      role: "Founder & CEO",
      bio: "Tech enthusiast with a passion for democratizing education through technology.",
      image: FoundingStory,
    },
    {
      name: "Priya Patel",
      role: "Chief Learning Officer",
      bio: "Former professor with 15+ years experience in educational innovation.",
      image: BannerImage1,
    },
    {
      name: "Vikram Malhotra",
      role: "Head of Technology",
      bio: "Full-stack developer passionate about creating intuitive learning experiences.",
      image: BannerImage2,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "This platform transformed my learning journey. The courses are engaging and the community support is incredible.",
      author: "Meera K., Data Science Student",
      rating: 5,
    },
    {
      text: "As a working professional, the flexibility of these courses helped me upskill without disrupting my schedule.",
      author: "Rahul Singh, Software Engineer",
      rating: 5,
    },
    {
      text: "The mentorship program provided invaluable guidance for my career transition into tech.",
      author: "Neha Gupta, Career Switcher",
      rating: 4,
    },
  ];

  // Company values
  const values = [
    {
      icon: <Book className="w-8 h-8 text-purple-500" />,
      title: "Accessible Learning",
      description:
        "Education should be accessible to everyone, regardless of geographical or economic constraints.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Focused",
      description:
        "We believe learning thrives in collaborative environments where people can share and grow together.",
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Innovation Driven",
      description:
        "Constantly evolving our methods and technology to provide cutting-edge educational experiences.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Learner First",
      description:
        "Every decision we make prioritizes the learning experience and success of our students.",
    },
  ];

  // Stats
  const stats = [
    { number: "15,000+", label: "Active Learners" },
    { number: "200+", label: "Expert Instructors" },
    { number: "350+", label: "Courses Available" },
    { number: "50+", label: "Countries Reached" },
  ];





  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transforming Lives Through Knowledge
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-12">
              We're on a mission to democratize education and empower learners
              across the globe with accessible, high-quality courses taught by
              industry experts.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-purple-800 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition duration-300">
                Explore Courses
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-purple-800 px-6 py-3 rounded-full font-medium transition duration-300">
                Join Community
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-auto"
            >
              <path
                fill="#F9FAFB"
                fillOpacity="1"
                d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,181.3C840,171,960,181,1080,181.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 ">Our Story</h2>
              <p className="text-lg mb-6 text-gray-700">
                Our journey began in 2018 when a group of educators and
                technologists came together with a shared vision: to break down
                the barriers to quality education and create a platform where
                knowledge could flow freely across borders.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                We witnessed firsthand how traditional education systems were
                failing to adapt to the rapidly changing demands of the modern
                world. Many talented individuals were being left behind due to
                geographical, financial, or time constraints.
              </p>
              <p className="text-lg text-gray-700">
                This realization fueled our passion to build a learning
                ecosystem that combines cutting-edge technology with expert
                instruction and peer collaboration, making quality education
                accessible to anyone with an internet connection.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={BannerImage1}
                    alt="Team working together"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg mt-8">
                  <img
                    src={FoundingStory}
                    alt="Student learning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={BannerImage3}
                    alt="Online classroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg mt-8">
                  <img
                    src={BannerImage2}
                    alt="Community event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Mission */}
              <div className="p-10 md:p-12 bg-gradient-to-br from-indigo-600 to-purple-700 text-black">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>

                <p className="text-lg mb-6 opacity-90">
                  To democratize education by providing accessible, affordable,
                  and high-quality learning opportunities to individuals
                  worldwide.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>
                      Breaking down geographical and financial barriers to
                      quality education
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>
                      Empowering learners with practical skills that meet
                      industry demands
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>
                      Fostering a global community of lifelong learners and
                      educators
                    </p>
                  </li>
                </ul>
              </div>

              {/* Vision */}
              <div className="p-10 md:p-12 bg-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Target className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Vision
                  </h3>
                </div>

                <p className="text-lg mb-6 text-gray-700">
                  To create a world where everyone has equal opportunity to
                  learn, grow, and achieve their potential through education.
                </p>

                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-indigo-100 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <p>
                      Building the world's most accessible and effective
                      learning ecosystem
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-indigo-100 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <p>
                      Pioneering innovative teaching methodologies and
                      technologies
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-indigo-100 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <p>
                      Becoming the catalyst for 1 million successful career
                      transformations by 2030
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-lg opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 bg-purple-50 p-4 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6">Meet Our Team</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
            Our diverse team brings together expertise from education,
            technology, and business to create an exceptional learning
            experience.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="bg-white p-2 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-purple-700" />
                      </a>
                      <a
                        href="#"
                        className="bg-white p-2 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-purple-700" />
                      </a>
                      <a
                        href="#"
                        className="bg-white p-2 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <Globe className="w-5 h-5 text-purple-700" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Learners Say
          </h2>
          <div className="relative">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                    index === activeTestimonial
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                  style={{
                    transform: `translateX(-${activeTestimonial * 100}%)`,
                  }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-lg italic mb-6 text-gray-700">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center">
                      <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-purple-700 font-bold text-lg">
                          {testimonial.author.split(" ")[0][0]}
                          {testimonial.author.split(" ")[1][0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial
                      ? "bg-purple-600"
                      : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 ">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8 text-blue-50">
          Reviews from other learners
        </h1>

        {/* <ReviewSlider /> */}
        <div className="w-11/12">
          <ReviewSlider></ReviewSlider>
        </div>
      </div>

      {/* Contact Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg mb-10 text-gray-700">
                Have questions about our courses, methodology, or want to
                explore partnership opportunities? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="text-gray-700">hello@learningplatform.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <p className="text-gray-700">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Visit Us</h3>
                    <p className="text-gray-700">
                      Tech Hub, Sector 62
                      <br />
                      Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition duration-300 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="mx-auto mt-20 pt-20 pb-20 flex w-full flex-col justify-between gap-10 text-black bg-white">
       <ContactFormSection />
     </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Join thousands of learners who are transforming their lives through
            our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition duration-300">
              Browse Courses
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-purple-800 px-8 py-4 rounded-full font-medium text-lg transition duration-300">
              Sign Up For Free
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
