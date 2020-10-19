import React, { useState } from 'react';
import LogInBox from './LogInBox';




function Home() {
    const [userLoggedIn, setUserLoggedIn] = useState();
    function handleLogout({ setUserLoggedIn }) {
        setUserLoggedIn(false);
    }

    return (
        <div>
            <LogInBox />

        </div>
    )



}

export default Home;