import './header.css'
import headphone from './headphone.jpg'
import train from './train_track.jpg'

export default function Header() {
  return (
    <div className='header'>

        <div className="headerTitles">
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>

        <img 
          className='headerImg' 
          src={train} 
          alt='bg-img'/>
    </div>
  )
}