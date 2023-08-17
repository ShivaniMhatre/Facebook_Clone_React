import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../Home/Home.css'
import '../Profile/Edit_Profile.css'

import {
    FcAlarmClock,
    FcPortraitMode,
    FcBookmark,
    FcConferenceCall,
    FcVideoCall,
    FcSalesPerformance,
    FcTodoList,
    FcCalendar,
    FcExpand,
    FcClapperboard
} from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const route=useNavigate();
    const [post, setPost] = useState(false)

    const post_down = () => {
        setPost(true)
    }
    const post_up = () => {
        setPost(false)
    }
    return (
        <div>
            <div id='screen'>
                <Navbar />
                <div id='home'>
                    <div id='menu'>
                        <div id='inner_menu'>
                            <div className="menu">
                                <div>
                                    <img src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=db1b99&_nc_ohc=Pg1r5vji1ToAX8OyAjR&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfB8xQehXQi-EcRF9n5Bzss-XD6IJs5FJk35qUYT2K89xQ&oe=65007BF8" />
                                </div>
                                <div>
                                    <h3>Shivani Mhatre</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcPortraitMode style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>Friends</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcAlarmClock style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>Memories</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcBookmark style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>Saved</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcConferenceCall style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>Groups</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcVideoCall style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>Vedio</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcSalesPerformance style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>Marketplace</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcTodoList style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>Feeds</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcCalendar style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>Events</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcClapperboard style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>Add Manager</h3>
                                </div>
                            </div>
                            <div className="menu">
                                <div>
                                    <FcExpand style={{ width: '60%', height: '100%' }} />
                                </div>
                                <div>
                                    <h3>See More</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='post'>
                        <div id='post_div_first'>
                            <div id='post_div_first_left'>
                                <i class="fa-solid fa-plus fa-2xl"></i>
                            </div>
                            <div id='post_div_first_right' onClick={()=>route('/story')}>
                                <p><b>Create Story</b></p>
                                <span>Share a photo or write something</span>
                            </div>
                        </div>
                        <div id='post_div_sec'>
                            <div id='post_div_sec_top' onClick={post_down}>
                                <div id='post_div_sec_top_left'>
                                    <img src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=db1b99&_nc_ohc=Pg1r5vji1ToAX8OyAjR&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfB8xQehXQi-EcRF9n5Bzss-XD6IJs5FJk35qUYT2K89xQ&oe=65007BF8" />
                                </div>
                                <div id='post_div_sec_top_right' >
                                    <input type='text' placeholder='What on your mind ,shivani? ' />
                                </div>
                            </div>
                            <div id='post_div_sec_bottom'>
                                <div className="post_div_sec_bottom">
                                    <i class="fa-solid fa-video fa-xl" style={{ color: 'rgb(66,183,42)' }}></i>
                                    <p>Live Vedio</p>
                                </div>
                                <div className="post_div_sec_bottom">
                                    <i class="fa-solid fa-photo-film fa-xl" style={{ color: 'red' }}></i>
                                    <p>Photo/Vedio</p>
                                </div>
                                <div className="post_div_sec_bottom">
                                    <i class="fa-regular fa-face-smile fa-xl" style={{ color: 'orange' }}></i>
                                    <p>Feeling</p>
                                </div>
                            </div>
                        </div>
                        <div id='post_div_third'>
                            <div id='post_div_third_top'>
                                <p>Recommended Post</p>
                            </div>
                            <div id='post_div_third_middle'>
                                <div>
                                    <div>
                                        <img src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t39.30808-6/366723832_759879569477731_7920897497767506559_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Exu1NkLJ7dYAX9Vqj1q&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfAi6KkySGfrhwci9c6D0EHMXfYZVAC9CZTMQeB85gypYg&oe=64DE3F2F" />
                                    </div>
                                    <span>
                                        <p><b>Enthusiastic Whims</b></p>
                                        <p><small>5.d🌎</small></p>
                                    </span>
                                </div>
                                <div>
                                    <div>
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                            </div>
                            <div id='post_div_third_bottom'>
                                <img src='https://scontent.fpnq7-1.fna.fbcdn.net/v/t39.30808-6/366723832_759879569477731_7920897497767506559_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Exu1NkLJ7dYAX9Vqj1q&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfAi6KkySGfrhwci9c6D0EHMXfYZVAC9CZTMQeB85gypYg&oe=64DE3F2F' />
                            </div>
                            <div id='lsc'>
                                <div id='like_btn'>
                                    👍<span>101 like</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='other'>
                        <div id='inner_other'>
                            <p>Group conversations</p>
                            <div style={{ width: '100%', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: "13%", height: '5vh', backgroundColor: 'rgb(228,230,235)', borderRadius: '100%' }}>
                                    <i class="fa-solid fa-plus fa-l" style={{ padding: '8px 13px' }}></i>
                                </div>
                                <div style={{ width: '50%', height: '5vh', paddingTop: '8px' }}>
                                    <span>Create new group</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {post &&
                <div id='post_screen'>
                    <div id='inner_post'>
                        <div id='post_heading'>
                            <div id='post_heading_text'>
                                <h3>Create Post</h3>
                            </div>
                            <div id='post_close' onClick={post_up}>
                                <i class="fa-solid fa-xmark fa-xl" style={{ padding: '15px 9px' }}></i>
                            </div>
                        </div>
                        <div id='post_body'>
                            <div id='post_body_first'>
                                <div id='post_pro'>
                                    <img src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=db1b99&_nc_ohc=Pg1r5vji1ToAX8OyAjR&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfB8xQehXQi-EcRF9n5Bzss-XD6IJs5FJk35qUYT2K89xQ&oe=65007BF8" />
                                </div>
                                <div id='post_info'>
                                    <h4 style={{ paddingTop: '5px' }}>Shivani Mhatre</h4>
                                    <div style={{ width: '28%', height: '35%', backgroundColor: 'lightgray', marginTop: '4px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '5px' }}>
                                        <i class="fa-solid fa-user-group fa-2xs "></i>
                                        <h5>Friends</h5>
                                        <i class="fa-solid fa-sort-down fa-xs" style={{ paddingBottom: '2px' }}></i>
                                    </div>
                                </div>
                            </div>
                            <div id='post_body_sec'>
                                <div id='post_input'>
                                    <input type='text' placeholder='Whats On Your Mind,Shivani?' />
                                </div>
                                <div id='post_emoji'>
                                    <i class="fa-regular fa-face-smile fa-xl" style={{ padding: '20px 10px' }}></i>
                                </div>
                            </div>
                            <div id='post_body_third'>
                                <div id='inner_post_body_third'>
                                    <div style={{ width: '5%', height: '10%', border: '1px solid white', backgroundColor: 'white', borderRadius: '100%', marginLeft: '94%', marginTop: '5px' }}>
                                        <i class="fa-solid fa-xmark" style={{ paddingLeft: '2px' }}></i>
                                       
                                        </div>
                                        <div style={{width:'15%',
                                        height:'8vh',
                                        borderRadius:'100%',
                                        backgroundColor:'white',
                                        margin:'15px 43%'}}>
                                             <i class="fa-regular fa-images fa-xl" style={{padding:'25px 15px'}}></i>
                                    </div>
                                    <h5 style={{textAlign:'center'}}>Add Photos/videos</h5>
                                    <p style={{textAlign:'center'}}><small>or drag and drop</small></p>
                                </div>
                            </div>
                            <div id="post_body_fourth">
                                <div id='post_body_fourth_left'><p>Add to your post</p></div>
                                <div id='post_body_fourth_right'>
                                    <div className="post_body_fourth_right">
                                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png' />
                                    </div>
                                    <div className="post_body_fourth_right">
                                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png' />
                                    </div>
                                    <div className="post_body_fourth_right">
                                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png' />
                                    </div>
                                    <div className="post_body_fourth_right">
                                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png' />
                                    </div>
                                    <div className="post_body_fourth_right">
                                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png' />
                                    </div>
                                    <div className="post_body_fourth_right">
                                        <i class="fa-solid fa-ellipsis fa-xl" style={{ padding: '19px 10px' }}></i>
                                    </div>
                                </div>
                            </div>
                            <div id='post_btn'>
                                <button>POST</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Home