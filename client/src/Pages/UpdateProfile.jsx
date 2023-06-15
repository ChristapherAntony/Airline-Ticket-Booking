/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom';




import { CgSpinner } from "react-icons/cg";
import { profileUpdate } from '../api/axiosCalls/auth';
import { errorTost, successTost } from '../Components/tost';
import { changeUserProfile } from '../Redux/userProfileReducer';


export const UpdateProfile = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userProfile = useSelector((state) => state.userprofile);
    const { user_name, profile_image } = userProfile
    const [previewUrl, setPreviewUrl] = useState(profile_image);

    const [userName, SetUserName] = useState(user_name)
    const [file, setFile] = useState()

    const handleImageChange = async (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selectedFile = files[0];
            // image reale-time render
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreviewUrl(fileReader.result);
            };
            fileReader.readAsDataURL(selectedFile);
            setFile(selectedFile)
        }

    };

    const handleUpdate = () => {
        const formData = new FormData();
        formData.append('user_name', userName);
        formData.append('profile_image', file);

        profileUpdate(formData).then((result) => {
            console.log(result, "done");
            const { user_name, email, profile_image } = result.data.updatedUser
            // need to handle the response
            dispatch(changeUserProfile({ user_name, email, profile_image, isLoggedIn: true }));
            successTost('Updated')
            navigate("/", { replace: true }); // use replace option to prevent going back
        }).catch((err) => {
            errorTost(err.message)
        });
    };




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
                                <div className="w-full max-w-sm p-4 bg-white border sm:p-6 md:p-8 dark:bg-gray-800">
                                    <div className="space-y-6 w-60" >

                                        <div className="image-upload  shadow-sm relative flex flex-col items-center justify-center rounded-md py-8 mt-3">
                                            <img className="inline-block h-20 w-20 rounded-full ring-2 ring-white" src={previewUrl} alt="" />

                                            <div className="image-upload__info mt-2 cursor-pointer">
                                                Click to update Picture
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="w-full h-full top-0 left-0 absolute opacity-0"
                                                id="setting-form-1"
                                                onChange={handleImageChange}
                                            />


                                        </div>

                                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                            Update profile
                                        </h5>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Your name
                                            </label>

                                            <input
                                                value={userName}
                                                onChange={(e) => SetUserName(e.target.value)}
                                                placeholder="name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required
                                            />
                                        </div>


                                        <button
                                            type="submit"
                                            onClick={handleUpdate}
                                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Update
                                        </button>

                                    </div>
                                </div>




                            </div>
                            {/* Right Side */}
                            <img
                                src="https://images.unsplash.com/photo-1666361759686-ce64c9e1d1b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

                                alt=""
                                className="w-[430px] hidden md:block md:rounded-r-2xl"
                            />
                            {/* Close button */}

                        </div>
                    </div>
                </>




            </div>
        </div>

    )
}

export default UpdateProfile