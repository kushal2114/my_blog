import './topbar.css'
import anshPhoto from "./anshPhoto.jpeg"
import { Link } from 'react-router-dom';

export default function Topbar() {
    const user = false;
  return (
    <div className='top'>


        <div className="topLeft">
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-x-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
        </div>


        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className= 'link' to='/'>HOME</Link>
                </li>
                <li className="topListItem"> 
                    <Link className= 'link' to='/'>ABOUT</Link>
                </li>
                <li className="topListItem"> <Link className= 'link' to='/'>CONTACT</Link></li>
                <li className="topListItem"> <Link className= 'link' to='/write'>WRITE</Link></li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>


        <div className="topRight">
            {user ? (
                 <img
                 className='topImg' 
                 src={anshPhoto} 
                 alt="chutiya" />
            ) :( 
            
            <ul className='topList'>
                <li className='topListItem'><Link className= 'link' to='/login'>LOGIN</Link></li>
                <li className='topListItem'><Link className= 'link' to='/register'>REGISTER</Link></li>
            </ul>
            ) }
           
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>


    </div>
  )
}