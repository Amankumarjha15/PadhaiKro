import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { resetPasswordToken } from '../services/operations/authAPI';

function ForgotPassword() {

   const {loading} = useSelector((state)=>state.auth);
   const {email , setEmail} = useState("");
   const [SentEmail, setSentEmail] = useState(false);
   const dispatch = useDispatch();



   const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordToken(email , setSentEmail));
   }



  return (
    <div className='w-full min-h-[calc(100vh-5rem)] flex justify-center items-center '>
        {
          loading ? (
          <div className='spinner'></div>
        ) : (
            <div className='w-[50%] flex flex-col text-white items-center p-10 gap-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                <h1 className='text-4xl font-inter font-bold text-yellow-25 '>
                    {
                        !SentEmail ? "Reset Your Password !" : "Check Your Email !"
                    }
                </h1>

                <p className='text-center text-richblack-100'>
                    {
                        !SentEmail ? "Have no Fear . We'll email you instructions to reset your Password if you dont have acess your email we can try account recovery." : `We have sent the reset mail to ${email}`
                    }
                </p>


                <form onSubmit={handleOnSubmit} className='w-full'>
                {
                    !SentEmail && (
                        <label className='w-full px-5 py-2'>
                            <p  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address  <sup className="text-pink-200">*</sup></p>
                            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Mail Here'  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" />
                        </label>
                    )
                }
                {/* <button className='w-full text-bold bg-yellow-25 text-black px-5 py-2'>
                    {
                        !SentEmail ? "Reset Password" : "Resend Mail"
                    }
                </button> */}
                <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              {!SentEmail ? "Sumbit" : "Resend Email"}
            </button>
                </form>

                

                <div className="">
                    <Link to={"/login"}>
                        <p>Back to Login</p>
                    </Link>
                </div>




            </div>

        )  
        }
    </div>
  )
}

export default ForgotPassword