import React from 'react'
import '../Story/Story.css';
import { AiOutlinePicture } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const Story = () => {
    const route = useNavigate();
    return (
        <div>
            <div id='story_screen'>
                <div id='story_left'>
                    <div id='story_left_top'>
                        <div id='story_close' onClick={()=>route('/')}>
                            <i class="fa-solid fa-xmark fa-xl" style={{ padding: '20px 15px' }}></i>
                        </div>
                        <div id='story_logo'>
                            <img src='https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/vV4w4OL9xUs.png' />
                        </div>
                    </div>
                    <div id='story_left_bottom'>
                        <div id='story_left_bottom_up'>
                            <div>
                                <h4>Your Story</h4>
                            </div>
                            <div>
                                <i class="fa-solid fa-gear fa-xl" style={{ padding: '15px 10px' }}></i>
                            </div>
                        </div>
                        <div id='story_left_bottom_down'>
                            <div id='story_profile_pic'>
                                <img src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=db1b99&_nc_ohc=Pg1r5vji1ToAX8OyAjR&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfB8xQehXQi-EcRF9n5Bzss-XD6IJs5FJk35qUYT2K89xQ&oe=65007BF8" />
                            </div>
                            <div id='story_name'>
                                <h4>Shivani Mhatre</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='story_right'>
                    <div id='story_right_head'>
                        <div>
                            <div className="story_right_head">
                                <i class="fa-solid fa-bars fa-xl"></i>
                            </div>
                            <div className="story_right_head">
                                <i class="fa-solid fa-bell fa-xl"></i>
                            </div>
                            <div className="story_right_head">
                                <img src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=db1b99&_nc_ohc=Pg1r5vji1ToAX8OyAjR&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfB8xQehXQi-EcRF9n5Bzss-XD6IJs5FJk35qUYT2K89xQ&oe=65007BF8" />
                            </div>
                        </div>
                    </div>
                    <div id='story_body'>
                        <div className="story_body" style={{ backgroundImage: 'linear-gradient(to bottom right,blue,skyblue)' }}>
                            <div style={{
                                width: '25%',
                                height: '8vh',
                                borderRadius: '100%',
                                backgroundColor: 'white',
                                margin: 'auto',
                                marginTop: '47%'
                            }}>
                                <i class="fa-regular fa-images fa-xl"></i>
                            </div>
                            <p><small>Create a Photo Story</small></p>
                        </div>
                        <div className="story_body" style={{ backgroundImage: 'linear-gradient(purple,pink)' }}>
                            <div style={{
                                width: '25%',
                                height: '8vh',
                                borderRadius: '100%',
                                backgroundColor: 'white',
                                margin: 'auto',
                                marginTop: '47%'
                            }}>
                                <i class="fa-solid fa-a fa-xl"></i>
                            </div>
                            <p><small>Create a Text Story</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story