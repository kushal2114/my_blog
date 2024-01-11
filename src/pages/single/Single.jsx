import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../../src/components/singlePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar />
    </div>
  )
}