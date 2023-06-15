/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { CgSpinner } from "react-icons/cg";
import { emailVerify, registerWithEmail } from "../api/axiosCalls/auth";
import { successTost } from "./tost";

function Email({ setEnterOTP }) {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const sendOTP = (email) => {
        //send email to server ...
        registerWithEmail(email).then((res) => {
            // console.log(res);
            successTost("OTP send successfully ")
            setLoading(false)
            setEnterOTP(email)
        }).catch((err) => {
            // console.log(err);
            setError("Something went wrong")
            setLoading(false)
        })
    }

    const handleNextButton = () => {
        setLoading(true)
        //validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            sendOTP(email)
            // getEmail(email)
           
        } else {
            setLoading(false)
            setError('Please enter a valid email...')
            setEmail('')
            setTimeout(() => {
                setError(null);
            }, 4000);
        }
    }
    return (
        <div>
            {/* Top Content */}
            <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
            <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
                Log in your account to purchase and track history.
            </p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Enter tour email address"
            />
            {/* Middle Content */}
            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                <div className="font-light text-cyan-700"></div>
                <button
                    onClick={handleNextButton}
                    className="w-full md:w-auto flex justify-center items-center p-2 space-x-2 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                    <span>Next</span>
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

            {error ? (<div className="text-red-500 text-sm"> {error} </div>) : (<div className="text-blue-500 text-sm">Please enter email to continue..</div>)}
        </div>
    )
}

export default Email