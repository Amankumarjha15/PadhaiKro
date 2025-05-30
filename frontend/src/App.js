import { Route , Routes, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/Auth/OpenRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Footer from "./components/common/Footer";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/Auth/PrivateRoute";
import MyProfile from "./components/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import Settings from "./components/Dashboard/Settings/index"
import Cart from "./components/Dashboard/Cart/index";
import EnrolledCourses from "./components/Dashboard/EnrolledCourses";
import AddCourse from "./components/Dashboard/AddCourse/index";
import MyCourses from "./components/Dashboard/MyCourses";
import EditCourse from "./components/Dashboard/EditCourse/index";
import Instructor from "./components/Dashboard/InstructorDashboard/Instructor";
import { useDispatch, useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import Courses from "./pages/Courses";
import Error from "./pages/Error";
import CourseDetails from "./pages/CourseDetails"
import ViewCourse from "./pages/ViewCourse";
import VideoDetail from "./components/ViewCourse/VideoDetails"
import { useEffect } from "react";
import { logout } from "./services/operations/authAPI";



function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const { user } = useSelector((state) => state.profile)

  useEffect(()=>{ 
    const ex = localStorage.getItem("expiresin")
    if(ex>Date.now()){
      dispatch(logout(navigate))
    }},[])




  return (
    <div className='w-screen min-h-screen flex flex-col font-inter bg-richblack-900'>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<OpenRoute><Login/></OpenRoute>}></Route>
      <Route path='/signup' element={<OpenRoute><Signup/></OpenRoute>}></Route>
      <Route path='/forgot-password' element={<OpenRoute><ForgotPassword/></OpenRoute>}></Route>
      <Route path='/update-password/:id' element={<OpenRoute><UpdatePassword/></OpenRoute>}></Route>
      <Route path='/verify-email' element={<OpenRoute><VerifyEmail/></OpenRoute>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path="courses/:courseId" element={<CourseDetails/>} />



      <Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      
      <Route path="dashboard/Settings" element={<Settings />} />
      

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }

      {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/instructor" element={<Instructor />} />
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
          
          </>
        )
      }


    </Route>



    <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetail />}
          />
          </>
        )
      }

      </Route>




    <Route path="*" element={<Error />} />





      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
