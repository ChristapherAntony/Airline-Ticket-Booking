/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { OtpInput } from 'reactjs-otp-input';
import { CgSpinner } from "react-icons/cg";
import { emailVerify } from '../api/axiosCalls/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUserProfile } from '../Redux/userProfileReducer';

function Otp({ setEnterOTP, email }) {
    const [loading, setLoading] = useState(false)
    const [error, SetError] = useState('')
    const [otp, setOTP] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch()




    const handleSendOtp = () => {

        setLoading(true);
        // send otp to server for verifying otp
        emailVerify(email, otp).then((res) => {
            const { user_name, email, profile_image, is_profile_updated } = res.data.updatedUser
            //update the redux store user profile
            dispatch(changeUserProfile({ user_name, email, profile_image, isLoggedIn: true }));

            if (!is_profile_updated) {
                // need to update profile
                navigate('/update-profile')
            } else {
                navigate('/')
            }
            setLoading(false);

        }).catch((err) => {
            setLoading(false);
            SetError(err.message)
            setTimeout(() => {
                SetError(null);
            }, 3000);

        })
    };


    return (
        <div>
            <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
            <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
                Please enter the OTP sended to {email} <br /> <button onClick={() => setEnterOTP()} className='text-blue-600'>  change email</button>
            </p>


            <OtpInput
                value={otp}
                onChange={(input) => setOTP(input)}
                numInputs={6}
                separator={<span>-</span>}
                className='text-black '
                inputStyle={{ width: '2.5rem', height: '2.5rem' }} // Optional: Adjust the size of each input box
            />
            {/* Middle Content */}
            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                <div className="font-light text-cyan-700"></div>
                <button
                    onClick={handleSendOtp}
                    className="w-full md:w-auto flex justify-center items-center p-2 space-x-2 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">

                    <span>Send OTP</span>

                    {loading ? (
                        <CgSpinner size={20} className="mt-1 animate-spin" />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ffffff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1={5} y1={12} x2={19} y2={12} />
                            <line x1={13} y1={18} x2={19} y2={12} />
                            <line x1={13} y1={6} x2={19} y2={12} />
                        </svg>
                    )}


                </button>

            </div>
            {error ? (<div className="text-red-500 text-sm"> {error} </div>) : (<div className="text-blue-500 text-sm">Please enter otp to continue..</div>)}


        </div>
    )
}

export default Otp