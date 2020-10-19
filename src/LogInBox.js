import React, { useState } from "react"



function LogInBox() {
    const [userLoggedIn, setUserLoggedIn] = useState();





    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)
    }



    function handleLogin(event) {
        event.preventDefault();
        if (
            email === 'arthurneuro7@gmail.com' && password === '123456'
        ) {
            setUserLoggedIn(true);
            window.location.assign('welcomePage');
        }

    }

    /*setUserLoggedIn(true);*/

    return (
        <div className='loginbox'>
            {userLoggedIn === true && <p>Welcome User!</p>}
            {userLoggedIn === false && <p><i>Please sign up for an account</i></p>}
            <br />
            <form>
                <label>Email</label>
                <input type="text" value={email} onChange={handleEmailInput} />

            </form>

            <form>
                <label>Password</label>
                <input type="password" value={password} onChange={handlePasswordInput}
                />

            </form>

            <button onClick={handleLogin}>Login</button>
            <br />
            <br />

        </div>
    )
}

export default LogInBox;
