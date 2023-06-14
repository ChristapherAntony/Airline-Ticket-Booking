import { toast } from 'react-toastify';


const successTost = (message, time = 5000) => {
    toast.success(message, {
        autoClose: time,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

const errorTost = (message, time = 5000) => {
    toast.error(message, {

        autoClose: time,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}



export { successTost, errorTost }