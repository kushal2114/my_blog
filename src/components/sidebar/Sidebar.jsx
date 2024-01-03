import './sidebar.css'
import headphones from './headphone.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            
            <img 
                className='sidebarImg'
                src={headphones} 
                alt="" 
            />

            <p>I'm an engineering student in the final stretch of my teenage years, grappling with a mid-life crisis. I'm striving to improve and discover what brings me happiness in a world that often highlights our flaws. This blog is my attempt at gratitude, aiming to spread positivity and share my personal insights on life as I navigate through each day.</p>
        </div>


        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItems">Life</li>
                <li className="sidebarListItems">Music</li>
                <li className="sidebarListItems">Style</li>
                <li className="sidebarListItems">Sport</li>
                <li className="sidebarListItems">Tech</li>
                <li className="sidebarListItems">Cinema</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-x-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>
        </div>

    </div>
  )
}