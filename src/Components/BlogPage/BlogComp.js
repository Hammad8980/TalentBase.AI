import React from 'react';

const BlogComp = ({ blog }) => {
    return (
        <>
            <button className='BlogComp PrimaryColor1 SidePadding' data-bs-toggle="modal" data-bs-target="#centeredModal">
                <p className='BlogCompP1'>{(blog.title).length <= 25 ? blog.title : `${(blog.title).slice(0, 25)}...`}</p>
                <p className='BlogCompP2'>{(blog.body).length <= 125 ? blog.body : `${(blog.body).slice(0, 125)}...`}</p>
                <div className='BlogCompDiv1'><img className='BlogCompImg' src="./bunny.jpg" alt="Your image description" /></div>
            </button>
            <div class="modal fade" id="centeredModal" tabindex="-1" aria-labelledby="centeredModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="centeredModalLabel">{blog.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>{blog.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogComp