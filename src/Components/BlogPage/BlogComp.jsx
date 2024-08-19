import React from 'react';

const BlogComp = ({ blog }) => {
    return (
        <>
            <button className='BlogComp PrimaryColor1 SidePadding' data-bs-toggle="modal" data-bs-target="#centeredModal">
                <p className='BlogCompP1'>{(blog.title).length <= 25 ? blog.title : `${(blog.title).slice(0, 25)}...`}</p>
                <p className='BlogCompP2'>{(blog.body).length <= 125 ? blog.body : `${(blog.body).slice(0, 125)}...`}</p>
                <div className='BlogCompDiv1'><img className='BlogCompImg' src="./bunny.jpg" alt="Your image description" /></div>
            </button>
            <div className="modal fade" id="centeredModal" tabIndex="-1" aria-labelledby="centeredModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="centeredModalLabel">{blog.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{blog.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogComp