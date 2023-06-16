/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"



import { logOut } from "../../api/axiosCalls/auth"
import { errorTost } from "../tost"
import { resetUserProfile } from "../../Redux/userProfileReducer"



function ProfileDrop({showDropdown}) {

    const dispatch = useDispatch()
    const userProfile = useSelector((state) => state.userprofile);
    const { user_name, email } = userProfile

    const handleLogOut = () => {
        //logout from server
        logOut().then((res) => {
            dispatch(resetUserProfile())
        }).catch((err) => {
            console.log(err);
            errorTost("Something went wrong")
        })
        showDropdown()
    }


    return (
        <div
            className="z-50 absolute top-14 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
        >
            <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                    {user_name}
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  {email}
                </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
                {/* <li>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Dashboard
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Settings
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Earnings
                    </a>
                </li> */}
                <li>
                    <a
                       onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ProfileDrop