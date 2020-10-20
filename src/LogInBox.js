import React, { useState } from 'react';


/**
* @author
* @function LoginBox
**/

const LoginBox = (props) => {

    const [username, setUsername] = useState('Arthur');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleUsernameInput = (event) => {
        setUsername(event.target.value)
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    };

    function handleLogin(event) {
        event.preventDefault();
        if (username === 'Arthur' && password === '123456')
            setLoggedIn(true)
        window.location = "welcomePage";
    }
    return (
        <div className="loginbox">

            {
                loggedIn === true ?
                    <p>Welcome Arthur! What do you have for us today? Add a new post...</p> : null
            }



            <form>
                <span>Login</span>
                <br />
                <br />
                <label>
                    <input type="text" value={username} placeholder="Username" onChange={handleUsernameInput} />
                    Username</label>
                <br />
                <br />
                <label><input type="password" value={password} placeholder="Password" onChange={handlePasswordInput} /> Password</label>
                <br /> <br />
                <button onClick={handleLogin}>Login</button>
                <br /> <br />
                <span><a href="#">Forgot password?</a>
                    <br />
                    <a href="#">Sign up</a></span>
            </form>


        </div>
    );

}

export default LoginBox;