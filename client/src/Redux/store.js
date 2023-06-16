import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userProfileReducer from './userProfileReducer';
import loadingReducer from './loadingReducer';
import searchKeyReducer from './searchKeyReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userprofile'],
};

const rootReducer = combineReducers({
  userprofile: userProfileReducer,
  loading: loadingReducer,
  searchkey:searchKeyReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
