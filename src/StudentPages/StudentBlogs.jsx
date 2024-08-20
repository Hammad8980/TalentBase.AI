import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const StudentBlogEditor = () => {
  const navigate = useNavigate();

  const StudentBlogEditor = () => {
    navigate('/studentblogeditor');
  }

  const BlogExplore = () => {
    navigate('/blogsexplore');
  }

  return (
    <div>
      <div className='stu-portal-button-div'>
        <button className='stu-portal-button PrimaryColor1' onClick={StudentBlogEditor}>
          <div>Write your own Blog</div>
          <div><FontAwesomeIcon icon={faCirclePlus} /></div>
        </button>
        <button className='stu-portal-button PrimaryColor1' onClick={BlogExplore}>
          <div>Explore Blogs</div>
          <div><FontAwesomeIcon icon={faLocationArrow} /></div>
        </button>
      </div>
    </div>
  )
}

export default StudentBlogEditor
