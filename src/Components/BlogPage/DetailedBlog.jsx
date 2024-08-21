import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

const DetailedBlog = () => {
    const location = useLocation();
    const { blog } = location.state;
    const navigate = useNavigate();

    useEffect(() => {
        console.log(blog);
        console.log("sfhksfh")
      }, []);

    const GoBack = () => {
        navigate(-1);
    }

    return (
        <div className='detail-blog-main-div'>
            <div className='detailed-blog-main-button-div'>
                <button className='detailed-blog-button PrimaryColor1' onClick={GoBack}>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                    <div>Return</div>
                </button>
            </div>
            <div className='detailed-blog-subdiv2 PrimaryColor1 SidePadding'>
                <p className='detailed-blog-subdiv2-p1'>
                    {blog?.subject}
                </p>
                <p className='detailed-blog-subdiv2-p2'>
                    {blog?.body}
                </p>
                <div className='BlogCompKeywords'>
                    {blog?.keywords.map((keyword, index) => (
                        <span key={index} className='BlogCompKeyword' style={{fontSize: '2rem'}}>#{keyword}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetailedBlog;
