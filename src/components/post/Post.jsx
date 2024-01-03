import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img
            className='postImg' 
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" 
            alt="abba jabba dabba" 
        />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Abba jabba dabba</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>

        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis at aut enim iusto, corporis rerum molestias, impedit a, perferendis ratione? Minima laborum quibusdam unde consectetur saepe fuga similique id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis at aut enim iusto, corporis rerum molestias, impedit a, perferendis ratione? Minima laborum quibusdam unde consectetur saepe fuga similique id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis at aut enim iusto, corporis rerum molestias, impedit a, perferendis ratione? Minima laborum quibusdam unde consectetur saepe fuga similique id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis at aut enim iusto, corporis rerum molestias, impedit a, perferendis ratione? Minima laborum quibusdam unde consectetur saepe fuga similique id.
        </p>
    </div>
  )
}