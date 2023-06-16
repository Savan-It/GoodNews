import React, { Component } from 'react'
import sppinerBlack from './loading_black.gif'
import sppinerWhite from './loading_white.gif'

export class Loading extends Component {
    render() {
        return (
            <>
                <div className='text-center'>
                    <img src={this.props.mode === "dark" ? sppinerWhite : sppinerBlack} alt="loading" />
                </div>
            </>
        )
    }
}

export default Loading