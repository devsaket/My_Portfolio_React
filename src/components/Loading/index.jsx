import React from 'react'

import './style.scss'

const Loading = () => {

    return (
        <>
            <div className='loading-body'>
                <div className="loading-container">
                    <span className='bg-dark text-light fw-bold rounded-circle nav-brand'>SK</span>
                    <div className='my-3'>Saket is</div>
                    <div className="loading-text">
                        <span>T</span>
                        <span>h</span>
                        <span>i</span>
                        <span>n</span>
                        <span>k</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading