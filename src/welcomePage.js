import React, { useState } from 'react';
/**
* @author
* @function Welcome
**/

const Welcome = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);




    return (

        <div>
            {
                loggedIn === true ?
                    <p>Welcome Arthur! What do you have for us today? Add a new post...</p> : null
            }
        </div>
    )

}

export default Welcome;