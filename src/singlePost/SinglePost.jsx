import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
                src="https://wallpapers.com/images/hd/baby-omen-cat-random-pfp-1qcuvryeqaykzkdg.jpg" 
                alt="babyOmen" 
                className="singlePostImg" 
            />

            <h1 className="singlePostTitle">
                Lorem ipsum, dolor sit amet.
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>
                    Author: <b>Kushal</b>
                </span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci numquam sapiente perspiciatis ab. Earum saepe, asperiores facilis porro est libero aut sunt sed ducimus officia quia nemo iure amet.</p>
        </div>
    </div>
  )
}