import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogComp = ({ blog }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/detailedblog', { state: { blog } });
    };

    return (
        <>
            <button
                className='BlogComp PrimaryColor1 SidePadding'
                onClick={handleClick}
            >
                <p className='BlogCompP1'>
                    {blog.subject.length <= 75 ? blog.subject : `${blog.subject.slice(0, 75)}...`}
                </p>
                <p className='BlogCompP2'>
                    {blog.body.length <= 350 ? blog.body : `${blog.body.slice(0, 350)}...`}
                </p>
                <div className='BlogCompKeywords'>
                    {blog.keywords.slice(0, 10).map((keyword, index) => (
                        <span key={index} className='BlogCompKeyword'>#{keyword}</span>
                    ))}
                    {blog.keywords.length > 10 && <span className='BlogCompKeyword'>...</span>}
                </div>
            </button>
        </>
    );
};

export default BlogComp;
