import React, { useState } from 'react'
import '../Login/Login.css';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [register, setRegister] = useState(false);
    const route=useNavigate();

    function falldown() {
        setRegister(true)
    }
    function fallup() {
        setRegister(false)
    }
    return (
        <div>
            <div id='login_screen'>
                <div id='inner_login_screen'>
                    <div id='left_div'>
                        <div id='left_top'>
                            <div id='fb_logo'>
                                <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' />
                            </div>
                        </div>
                        <div id='left_middle'>
                            <p>Recent Logins</p>
                            <span>Click your picture or add an account</span>
                        </div>
                        <div id='left_bottom'>
                            <div id='picture'>
                                <div id='pic_top'>
                                    <img src='https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=db1b99&_nc_ohc=Pg1r5vji1ToAX8OyAjR&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfB8xQehXQi-EcRF9n5Bzss-XD6IJs5FJk35qUYT2K89xQ&oe=65007BF8' />
                                </div>
                                <div id='cross'>
                                    <i class="fa-solid fa-xmark fa-sm"></i>
                                </div>
                                <div id='pic_bottom'>
                                    <p>Shivani</p>
                                </div>
                            </div>
                            <div id='plus'>
                                <div id='plus_top'>
                                    <div id='inside_plus'>
                                        <i class="fa-solid fa-plus fa-2xl"></i>
                                    </div>
                                </div>
                                <div id='plus_bottom'>
                                    <p>Add Account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='right_div'>
                        <div id='inner_right_div'>
                            <div id='right_top'>
                                <form>
                                    <div id="login_email">
                                        <input type='email' name='email' placeholder='Email Address or Phone Number' />
                                    </div>
                                    <div id="login_password">
                                        <input type='password' name='password' placeholder='Password' />
                                    </div>
                                    <div id="login_btn">
                                        <button>Login</button>
                                    </div>
                                </form>
                                <div id='forgot'>
                                    <p>Forgotten Password?</p>
                                </div>
                            </div>
                            <div id='right_bottom'>
                                <div id='new_ac' >
                                    <button onClick={falldown}>Create New Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='create_page'>
                    <p><b>Create a page</b> for celebrity,brand or business</p>
                </div>
            </div>
            {register &&
                <div id='register_screen'>
                    <div id='inner_register'>
                        <p onClick={fallup}>x</p>
                        <div id='register_first'>
                            <h2>Sign Up</h2>
                            <p>Its's quick and easy</p>
                        </div>
                        <div id='register_sec'>
                            <form>
                                <div id='name'>
                                    <input type='text' placeholder='First Name' />
                                    <input type='text' placeholder='First Name' />
                                </div>
                                <div id='number'>
                                    <input type='text' placeholder='Mobile Number or email address' />
                                </div>
                                <div id='password'>
                                    <input type='password' placeholder='New Password' />
                                </div>
                                <div id='dob'>
                                    <p>Date Of Birth</p>
                                    <div>
                                        <select name="" id="day">
                                            <option value="">Day</option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                            <option value="">6</option>
                                            <option value="">7</option>
                                        </select>
                                        <select name="" id="month">
                                            <option value="">Month</option>
                                            <option value="">Jan</option>
                                            <option value="">Feb</option>
                                            <option value="">Mar</option>
                                            <option value="">Apr</option>
                                        </select>
                                        <select name="" id="year">
                                            <option value="">Year</option>
                                            <option value="">1990</option>
                                            <option value="">1991</option>
                                            <option value="">1992</option>
                                            <option value="">1993</option>
                                        </select>
                                    </div>
                                </div>
                                <div id='gender'>
                                    <p>Gender</p>
                                    <div>
                                        <div className="radio">
                                            <p>Female</p>
                                            <input type='radio' />
                                        </div>
                                        <div className="radio">
                                            <p>Male</p>
                                            <input type='radio' />
                                        </div>
                                        <div className="radio">
                                            <p>Custom</p>
                                            <input type='radio' />
                                        </div>
                                    </div>
                                </div>
                                <div id='info'>
                                    <p>People who use our service may have uploaded your contact information to Facebook. <b style={{ color: 'rgb(25,118,242)' }}>Learn more</b></p>
                                    <p>By cliking Sign Up, you agree to our <b style={{ color: 'rgb(25,118,242)' }}>Terms,Privacy Policy</b>and<b style={{ color: 'rgb(25,118,242)' }}> Cookies Policy.</b> You may receive SMS notifications from us and can opt out at any time.</p>
                                </div>
                                <div id='signup' onClick={()=>route('/')}>
                                    <input type='submit' value='Sign Up' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login