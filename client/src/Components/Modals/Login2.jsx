import { useState } from "react";
import LoginModal from "./LoginModal"



function Login2() {
    const [showLogin, setShowLogin] = useState(false);


    return (
        <>
            {/* Modal toggle */}
            <button
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                onClick={() => setShowLogin(!showLogin)}
                className="block text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
                type="button"
            >
                Login / Sign Up
            </button>


            {/* Main modal */}
            {showLogin && <LoginModal showLogin={() => setShowLogin(!showLogin)} />}
        </>

    )
}

export default Login2