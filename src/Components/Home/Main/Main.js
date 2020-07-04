import React from 'react';
import './Main.css'
import { Link } from 'react-router-dom';

class Main extends React.Component {
    state = {
        token: null
    }
    componentDidMount() {
        const token = localStorage.getItem('token')
        this.setState({ token: token })
    }

    render() {
        return ( 
            // menu part
            <div className='Main'>
                <div className="jarvis">

                    <img alt="G" className="jarv" src="https://images.squarespace-cdn.com/content/v1/563cc987e4b05a2939898c49/1506210816573-OY3PBRXTVKXSQU0U23FP/ke17ZwdGBToddI8pDm48kPnsf5mMwK3KDy1tisBlUmRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzo4SI7WUt2Kh3mJ9yIXE1J2LwB1WS8XsjNPjOfnyfL5aVyG4ZMghpx64iX7JBzitc/ihealth-AI.gif" />
                </div>
                <div className="menu">
                    <Link to='cards'>
                        <button
                            className="but">
                            <p className="claire"> Choose suit </p>
                        </button>
                    </Link>

                    {
                        this.state.token ?

                            <button
                                className="but">
                                <p className="claire">You're already authorized</p>
                            </button>
                            :
                            <Link to='auth'>
                                <button
                                    className="but">
                                    <p className="claire"> Login </p>
                                </button>
                            </Link>
                    }
                    {
                        this.state.token ?
                            <Link to='myprofile'>
                                <button
                                    className="but">
                                    <p className="claire"> My Profile </p>
                                </button>
                            </Link> :
                            <button
                                className="but">
                                <p className="claire">You're not authorized to access here</p>
                            </button>
                    }
                </div>


            </div>
        );
    }
}

export default Main;