import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { store, persistor } from './Redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './Redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <React.StrictMode> */}
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      {/* </React.StrictMode> */}
    {/* </PersistGate> */}
  </Provider>
)





