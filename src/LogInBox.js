import React, { useState } from "react"



function LogInBox() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    function logout() {
        setUserLoggedIn(false);


    }
    function login() {
        setUserLoggedIn(true);
    }
    return (
        <div className='loginbox'>
            {userLoggedIn === true && <p>Welcome User!</p>}
            {userLoggedIn === false && <p><i>Please sign up for an account</i></p>}
            <form>
                <label>Email</label>
                <input type="text" />

            </form>

            <form>
                <label>Password</label>
                <input type="password" />

            </form>

            <button onClick={login}>Login</button>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default LogInBox;
