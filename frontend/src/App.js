import { Route , Routes } from "react-router-dom";
import Home from './pages/home'
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/Auth/OpenRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Footer from "./components/common/Footer";



function App() {
  return (
    <div className='w-screen min-h-screen flex flex-col font-inter bg-richblack-900'>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<OpenRoute><Login/></OpenRoute>}></Route>
      <Route path='/signup' element={<OpenRoute><Signup/></OpenRoute>}></Route>
      <Route path='/forgot-password' element={<OpenRoute><ForgotPassword/></OpenRoute>}></Route>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
