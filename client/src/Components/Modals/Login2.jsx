
function Login2() {
    return (
        <>
            {/* Modal toggle */}
            <button
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                 <Login2/>
            </button>


            {/* Main modal */}
            <div
                id="defaultModal"
                tabIndex={-1}
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Get started
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <>
                            {/* Container */}
                            <div className="container mx-auto">
                                <div className="flex justify-center  ">
                                    {/* Row */}
                                    <div className=" flex">
                                        {/* Col */}
                                        <div
                                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")'
                                            }}
                                        />
                                        {/* Col */}
                                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                                <div className="mb-4 md:flex md:justify-between">
                                                    <div className="mb-4 md:mr-2 md:mb-0">
                                                        <label
                                                            className="block mb-2 text-sm font-bold text-gray-700"
                                                            htmlFor="firstName"
                                                        >
                                                            First Name
                                                        </label>
                                                        <input
                                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                            id="firstName"
                                                            type="text"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div className="md:ml-2">
                                                        <label
                                                            className="block mb-2 text-sm font-bold text-gray-700"
                                                            htmlFor="lastName"
                                                        >
                                                            Last Name
                                                        </label>
                                                        <input
                                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                            id="lastName"
                                                            type="text"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label
                                                        className="block mb-2 text-sm font-bold text-gray-700"
                                                        htmlFor="email"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                        id="email"
                                                        type="email"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="mb-4 md:flex md:justify-between">
                                                    <div className="mb-4 md:mr-2 md:mb-0">
                                                        <label
                                                            className="block mb-2 text-sm font-bold text-gray-700"
                                                            htmlFor="password"
                                                        >
                                                            Password
                                                        </label>
                                                        <input
                                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                            id="password"
                                                            type="password"
                                                            placeholder="******************"
                                                        />
                                                        <p className="text-xs italic text-red-500">
                                                            Please choose a password.
                                                        </p>
                                                    </div>
                                                    <div className="md:ml-2">
                                                        <label
                                                            className="block mb-2 text-sm font-bold text-gray-700"
                                                            htmlFor="c_password"
                                                        >
                                                            Confirm Password
                                                        </label>
                                                        <input
                                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                            id="c_password"
                                                            type="password"
                                                            placeholder="******************"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-6 text-center">
                                                    <button
                                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                                        type="button"
                                                    >
                                                        Register Account
                                                    </button>
                                                </div>
                                                <hr className="mb-6 border-t" />
                                                <div className="text-center">
                                                    <a
                                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                                        href="#"
                                                    >
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                                <div className="text-center">
                                                    <a
                                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                                        href="./index.html"
                                                    >
                                                        Already have an account? Login!
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>



                        {/* Modal footer */}
                        {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                data-modal-hide="defaultModal"
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                I accept
                            </button>
                            <button
                                data-modal-hide="defaultModal"
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                                Decline
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login2