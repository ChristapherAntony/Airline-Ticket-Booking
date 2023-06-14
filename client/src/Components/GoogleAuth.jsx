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

            const { user_name, email, profile_image } = response.data.existingUser
            // need to handle the response
            dispatch(changeUserProfile({ user_name, email, profile_image, isLoggedIn:true }));


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
