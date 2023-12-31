import './topbar.css'
import anshPhoto from "./anshPhoto.jpeg"

export default function Topbar() {
  return (
    <div className='top'>


        <div className="topLeft">
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-x-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
        </div>


        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>


        <div className="topRight">
            <img
            className='topImg' 
            src={anshPhoto} 
            alt="chutiya" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>


    </div>
  )
}