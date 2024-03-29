import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPFP">
                    <img 
                        src="" 
                        alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPFPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}} />
                </div>

                <label>Username</label>
                <input type="text" placeholder='Kushal'/>
                <label>Email</label>
                <input type="email" placeholder='xyz@gmail.com'/>
                <label>Password</label>
                <input type='password'/>

                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
