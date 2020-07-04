import React, { useState } from 'react';
import './Auth.css'
import SignIN from './Reg/SignIn/SignIn';
import SignUp from './Reg/SignUp/SignUp';

const Auth = () => {

    const [rot, setRotate] = useState(false)
    return (
        <div className='Auth'>
            {/* top button */}
            <button
                onClick={() => setRotate(!rot)}
                style={{ width: '400px', height: '60px' }}>
                <p  > {rot ? "Already have an account? SignIn" : " Don't have an account? Register Here"}  </p>
            </button>
            <br />

            {/* flip card part */}
            <div
                className={"flip-card"}>
                <div
                    className={rot ? ['flip-card-inner', 'rot'].join(' ') : "flip-card-inner"}>
                    <div className="flip-card-front">
                        <SignUp />
                    </div>
                    <div className="flip-card-back">
                        <SignIN />
                    </div>
                </div>
            </div>





        </div>
    );
}

export default Auth;




