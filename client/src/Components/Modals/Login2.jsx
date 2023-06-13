import GoogleAuth from '../GoogleAuth'
function Login2() {
    return (
        <>
            {/* Modal toggle */}
            <button
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                className="block text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
                type="button"
            >
                Login / Sign Up
            </button>


            {/* Main modal */}
            <div
                id="defaultModal"
                tabIndex={-1}
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative  ">
                    <>
                        {/* Global Container */}
                        <div className="flex items-center justify-center min-h-screen">
                            {/* Card Container */}
                            <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                                {/* Left Side */}
                                <div className="p-6 md:p-20">
                                    {/* Top Content */}
                                    <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
                                    <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
                                        Log in your account to purchase and track history.
                                    </p>
                                    <input
                                        type="text"
                                        className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                                        placeholder="Enter tour email address"
                                    />
                                    {/* Middle Content */}
                                    <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                                        <div className="font-light text-cyan-700"></div>
                                        <button className="w-full md:w-auto flex justify-center items-center p-2 space-x-2 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                                            <span>Next</span>
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
                                        </button>
                                    </div>
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
                                    src="https://images.unsplash.com/photo-1666361759686-ce64c9e1d1b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
        </>

    )
}

export default Login2