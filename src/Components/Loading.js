import React from 'react'
import sppinerBlack from './loading_black.gif'
import sppinerWhite from './loading_white.gif'

const Loading = (props) => {
        return (
            <>
                <div className='text-center'>
                    <img src={props.mode === "dark" ? sppinerWhite : sppinerBlack} alt="loading" />
                </div>
            </>
        )
}

export default Loading

