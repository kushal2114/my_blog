import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <form className="writeForm">

            <div className="writeFormGroup">
                <img src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" alt="xyz" className="writeImg" />

                <div className="imageWrapper">                  
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                
            </div>

            <div className="writeFormGroup">
                <textarea 
                    placeholder='Tell your story...' 
                    type='text'
                    className='writeInput writeText' 
                    ></textarea>
            </div>

            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}