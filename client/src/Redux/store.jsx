import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userProfileReducer from './userProfileReducer';
import loadingReducer from './loadingReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userprofile'],
};

const rootReducer = combineReducers({
  userprofile: userProfileReducer,
  loading: loadingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
