import { useState } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUserProfile } from '../Redux/userProfileReducer';
// import axios from '../Utilities/axios';

import { changeLoading } from '../Redux/loadingReducer';
import axios from 'axios';


function GoogleAuth() {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState(null);
    const dispatch = useDispatch()
    const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;


    const redirectPath = (location.state)?.path || '/'


    const handleLoginSuccess = async (response) => {
        dispatch(changeLoading(true));
        const token = response.credential;
        console.log(token);
        //send token to server

        axios.get('/'(token)).then((response) => {
            const user = response.data.data
            if (response.status === 200) {
                //if user exists response is jwt with credentials we need to dispatch and navigate to home
                const userName = user.profile_name
                const userEmail = user.email
                const userPhoto = user.profile_image
                const userPhone = user.phone_number
                dispatch(changeUserProfile({ userName, userEmail, userPhoto, userPhone }))

                navigate(redirectPath, { replace: true })
                dispatch(changeLoading(false));
            } else if (response.status === 202) {
                //else, navigate to addProfile page with data received in search params

                navigate('/register/add-profile', { state: user })
                dispatch(changeLoading(false));
            }
        }).catch((error) => {
            console.log(error);
            // errorTost('Google auth failed !')
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
