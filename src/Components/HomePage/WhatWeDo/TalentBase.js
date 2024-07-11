import React from 'react';

const TalentBase = ({ Data }) => {
    return (
        <div className='TalentBaseComp'>
            <h4>Talent Base</h4>
            <p>{(Data).length <= 250 ? Data : `${(Data).slice(0, 250)}...`}</p>
            <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#centeredModal">
                Learn More
            </button>
            <div class="modal fade" id="centeredModal" tabindex="-1" aria-labelledby="centeredModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="centeredModalLabel">Talent Base</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>{Data}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalentBase