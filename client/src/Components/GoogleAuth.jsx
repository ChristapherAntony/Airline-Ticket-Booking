import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUserProfile } from '../Redux/userProfileReducer';
import { changeLoading } from '../Redux/loadingReducer';
import { googleAuth } from '../api/axiosCalls/auth';
import { errorTost } from './tost';
const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;


function GoogleAuth() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const dispatch = useDispatch()

    const handleLoginSuccess = async (response) => {
        dispatch(changeLoading(true));
        const token = response.credential;

        //send token to server
        googleAuth(token).then((response) => {
            const { user_name, email, profile_image, is_profile_updated } = response.data.existingUser
            // need to handle the response
            dispatch(changeUserProfile({ user_name, email, profile_image, isLoggedIn: true }));


            if (!is_profile_updated) {
                // need to update profile
                navigate('/update-profile')
            } else {
                navigate('/')
            }


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
