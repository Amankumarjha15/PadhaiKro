import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    // <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
    //   {loading ? (
    //     <div>
    //       <div className="spinner"></div>
    //     </div>
    //   ) : (
    //     <div className="w-[40%] p-16 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-3xl">
    //       <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
    //         Verify Email
    //       </h1>
    //       <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
    //         A verification code has been sent to you. Enter the code below
    //       </p>
    //       <form onSubmit={handleVerifyAndSignup}>
    //         <OtpInput
    //           value={otp}
    //           onChange={setOtp}
    //           numInputs={6}
    //           renderInput={(props) => (
    //             <input
    //               {...props}
    //               placeholder="-"
    //               style={{
    //                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
    //               }}
    //               className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
    //             />
    //           )}
    //           containerStyle={{
    //             justifyContent: "space-between",
    //             gap: "0 6px",
    //           }}
    //         />
    //         <button
    //           type="submit"
    //           className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
    //         >
    //           Verify Email
    //         </button>
    //       </form>
    //       <div className="mt-6 flex items-center justify-between">
    //         <Link to="/signup">
    //           <p className="text-richblack-5 flex items-center gap-x-2">
    //             <BiArrowBack /> Back To Signup
    //           </p>
    //         </Link>
    //         <button
    //           className="flex items-center text-blue-100 gap-x-2"
    //           onClick={() => dispatch(sendOtp(signupData.email , navigate))}
    //         >
    //           <RxCountdownTimer />
    //           Resend it
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>

    
<div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center p-4">
  {loading ? (
    <div>
      <div className="spinner"></div>
    </div>
  ) : (
    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] p-4 sm:p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-3xl">
      <h1 className="text-richblack-5 font-semibold text-xl md:text-2xl lg:text-[1.875rem] leading-tight md:leading-[2.375rem]">
        Verify Email
      </h1>
      <p className="text-base md:text-[1.125rem] leading-normal md:leading-[1.625rem] my-3 md:my-4 text-richblack-100">
        A verification code has been sent to you. Enter the code below
      </p>
      <form onSubmit={handleVerifyAndSignup}>
        <div className="flex justify-center">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="-"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[36px] sm:w-[42px] md:w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
              />
            )}
            containerStyle={{
              justifyContent: "space-between",
              gap: "0 4px sm:0 6px",
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-50 py-[10px] sm:py-[12px] px-[12px] rounded-[8px] mt-4 sm:mt-6 font-medium text-richblack-900"
        >
          Verify Email
        </button>
      </form>
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-y-3 sm:gap-y-0">
        <Link to="/signup">
          <p className="text-richblack-5 flex items-center gap-x-2">
            <BiArrowBack /> Back To Signup
          </p>
        </Link>
        <button
          className="flex items-center text-blue-100 gap-x-2"
          onClick={() => dispatch(sendOtp(signupData.email, navigate))}
        >
          <RxCountdownTimer />
          Resend it
        </button>
      </div>
    </div>
  )}
</div>
  );
}

export default VerifyEmail;