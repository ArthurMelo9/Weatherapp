import React from "react"

function LogInBox() {
    return (
        <div className='loginbox'>
            <form>
                <label>Email</label>
                <input type="text" />

            </form>

            <form>
                <label>Password</label>
                <input type="password" />

            </form>
        </div>
    )
}

export default LogInBox;
