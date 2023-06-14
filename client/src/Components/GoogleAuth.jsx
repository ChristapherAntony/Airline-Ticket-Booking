import { useState } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUserProfile } from '../Redux/userProfileReducer';
// import axios from '../Utilities/axios';

import { changeLoading } from '../Redux/loadingReducer';
import axios from 'axios';
import { googleAuth } from '../api/axiosCalls/auth';
import { errorTost } from './tost';


function GoogleAuth() {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState(null);
    const dispatch = useDispatch()
    const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;





    const handleLoginSuccess = async (response) => {
        dispatch(changeLoading(true));
        const token = response.credential;

        //send token to server

        googleAuth(token).then((response) => {
            console.log(response.data.existingUser);
            // need to handle tehe response

            // {
            //     email
            //     :
            //     "christapher012@gmail.com"
            //     is_email_verified
            //     :
            //     true
            //     profile_image
            //     :
            //     "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
            //     user_name
            //     :
            //     "User"
            //     _id
            //     :
            //     "6489dea551cd2bf51a6940f1"
            // }
            
        }).catch((error) => {
            console.log(error);
            errorTost('Google auth failed !')
        })

    };

    const handleLoginFailure = () => {
        console.log('Login failed');
        setError('Failed to log in');
    };



    return (
        // className='flex items-center justify-center '
        <div className='flex items-center justify-center '>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                    useOneTap
                    text="continue_with"
                    size='large'
                // width='300'
                />
            </GoogleOAuthProvider>
            {error && (
                <div>
                    {error}
                </div>
            )}




        </div>
    );
}

export default GoogleAuth;
