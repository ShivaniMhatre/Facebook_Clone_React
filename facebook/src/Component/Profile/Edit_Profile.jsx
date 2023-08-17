import React from 'react'
import '../Profile/Edit_Profile.css';

const Edit_Profile = () => {
  return (
    <div>
      <div id='edit_screen'>
        <div id='inner_edit'>
          <div id='edit_heading'>
            <div id='edit_text'>
              <h3>Edit Profile</h3>
            </div>
            <div id='edit_close'>
            <i class="fa-solid fa-xmark fa-xl" style={{ padding: '7px 5px' }}></i>
            </div>
          </div>
          <div id='profile_pic'>
            <div id='pro_pic_heading'>
              <div>
                <h3>Profile Picture</h3>
                <p style={{color:'rgb(46,119,221)'}}>Add</p>
              </div>
            </div>
            <div id='pro_pic_img'>
              <img src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=db1b99&_nc_ohc=Pg1r5vji1ToAX8OyAjR&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfB8xQehXQi-EcRF9n5Bzss-XD6IJs5FJk35qUYT2K89xQ&oe=65007BF8" />
            </div>
          </div>
          <div id='cover_photo'>
            <div id='cover_photo_heading'>
              <div>
                <h3>Cover Photo</h3>
                <p style={{color:'rgb(46,119,221)'}}>Add</p>
              </div>
            </div>
            <div id='cover_pic'>

            </div>
          </div>
          <div id='avtar'>
            <div id='avtar_heading'>
              <div>
                <h3>Avtar</h3>
                <p style={{color:'rgb(46,119,221)'}}>Create</p>
              </div>
              <p>Only you can view this section</p>
            </div>
            <div id='avtar_pic'>
              <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/IkevDJ_fuvX.png' />
            </div>
            <p>Express yourself using an avtar</p>
            <div id='create_avtar'>
              <p>
                😊
              </p>
              <p style={{color:'rgb(46,119,221)'}}>Create Avtar</p>
            </div>
          </div>
          <div id='bio'>
            <div id='bio_heading'>
              <div>
                <h3>Bio</h3>
                <p style={{color:'rgb(46,119,221)'}}>Add</p>
              </div>
            </div>
            <div id='describe'>
              <input type='text' placeholder='Describe Yourself' />
            </div>
          </div>
          <div id='intro'>
            <div id='intro_heading'>
              <div>
                <h3>Customise Your Intro</h3>
                <p style={{color:'rgb(46,119,221)'}}>Add</p>
              </div>
            </div>
            <div id='info'>
              <div className="info">
                <div className='info_div_first'>
                  <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png' />
                </div>
                <div className='info_div_sec'>
                  <p>Current town or city</p>
                </div>
              </div>
              <div className="info">
                <div className='info_div_first'>
                  <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png' />
                </div>
                <div className='info_div_sec'>
                  <p>Workplace</p>
                </div>
              </div>
              <div className="info">
                <div className='info_div_first'>
                  <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png' />
                </div>
                <div className='info_div_sec'>
                  <p>Education</p>
                </div>
              </div>
              <div className="info">
                <div className='info_div_first'>
                  <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png' />
                </div>
                <div className='info_div_sec'>
                  <p>Home Town</p>
                </div>
              </div>
              <div className="info">
                <div className='info_div_first'>
                  <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/w44OSixC5Hn.png' />
                </div>
                <div className='info_div_sec'>
                  <p>Relationship Status</p>
                </div>
              </div>
            </div>
          </div>
          <div id='hobby'>
            <div id='hubby_heading'>
              <div>
                <h3>Hobbies</h3>
                <p style={{color:'rgb(46,119,221)'}}>Add</p>
              </div>
            </div>
          </div>
          <div id='feature'>
            <div id='feature_heading'>
              <div>
                <h3>Featured</h3>
                <p style={{color:'rgb(46,119,221)'}}>Add</p>
              </div>
            </div>
            <div id='feature_pic'>
              <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/gL1slwup025.png' />
            </div>
            <p>Feature your favourite photos and stories here for all of your friends to see.</p>
          </div>
          <div id='edit_btn'>
            <button style={{color:'rgb(46,119,221)'}}>Edit your About Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit_Profile


// last :- https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/gL1slwup025.png
// relatiom:- https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/w44OSixC5Hn.png
// location:-https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png
// edu:-https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png
// bag:-https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png
// home:-https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png