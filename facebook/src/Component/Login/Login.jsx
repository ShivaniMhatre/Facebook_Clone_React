import React from 'react'
import '../Login/Login.css';

const Login = () => {
    return (
        <div>
            <div id='login_screen'>
                <div id='inner_login_screen'>
                    <div id='left_div'>
                        <div id='left_top'>
                            <h1>facebook</h1>
                        </div>
                        <div id='left_middle'>
                            <p>Recent Logins</p>
                            <span>Click your picture or add an account</span>
                        </div>
                        <div id='left_bottom'>
                            <div id='picture'>
                                <div className='p_top'></div>
                                <div id='cross'>

                                </div>
                                <div className='p_bottom'>
                                    <p>Shivani</p>
                                </div>
                            </div>
                            <div id='plus'>
                                <div className='p_top'></div>
                                <div className='p_bottom'></div>
                            </div>
                        </div>
                    </div>
                    <div id='right_div'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login