/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import GoogleAuth from '../GoogleAuth'

import Otp from '../OTP';
import Email from '../Email';

function LoginModal({showLogin}) {

    const [enterOTP, setEnterOTP] = useState(false)
    const [email,setEmail]=useState("")

    // useEffect(() => {
    //     setEnterOTP(false)
    // }, [])


    return (

        <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 absolute w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative  ">
                <>
                    {/* Global Container */}
                    <div className="flex items-center justify-center min-h-screen">
                        {/* Card Container */}
                        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                            {/* Left Side */}
                            <div className="p-6 md:p-20">

                                {enterOTP ? ( 
                                    <Otp setEnterOTP={() => setEnterOTP(false)}  email={email}/>
                                ) : (

                                    <Email setEnterOTP={(email) => {
                                        setEnterOTP(true);
                                        setEmail(email);
                                      }} />

                                )}

                                {/* Border */}
                                <div className="mt-12 border-b border-b-gray-300" />
                                {/* Bottom Content */}
                                <p className="py-6 text-sm font-thin text-center text-gray-400">
                                    or log in with
                                </p>
                                {/* Bottom Buttons Container */}
                                <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0 ">

                                    {/* <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className="w-9" />
                                    <span className="font-thin">Google</span>
                                </button> */}



                                    <GoogleAuth />

                                </div>

                            </div>
                            {/* Right Side */}
                            <img
                                // src="https://images.unsplash.com/photo-1666361759686-ce64c9e1d1b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                src="https://img.freepik.com/free-vector/airplane-sky_1308-31202.jpg?w=740&t=st=1686710321~exp=1686710921~hmac=9877a4f47e9b59962adaee86a75151d8f359cfb43ce6f8bb4674518d22dd5f23"

                                alt=""
                                className="w-[430px] hidden md:block md:rounded-r-2xl"
                            />
                            {/* Close button */}
                            <div className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hove:cursor-pointer hover:-translate-y-0.5 transition duration-150">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-black group-hover:text-gray-600"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    onClick={()=>showLogin()}
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                                
                            </div>
                        </div>
                    </div>
                </>




            </div>
        </div>

    )
}

export default LoginModal