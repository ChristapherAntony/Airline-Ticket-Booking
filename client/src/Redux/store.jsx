import {configureStore} from '@reduxjs/toolkit'

import userProfileReducer from './userProfileReducer'
import loadingReducer from './loadingReducer';


const store=configureStore({
    reducer:{
        userprofile:userProfileReducer,
        loading:loadingReducer
    }    
})

export default store;