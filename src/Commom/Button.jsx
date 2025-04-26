import React from 'react'

function Button({color , bgcolor , radius , text}) {
    return (
        <button className='btn common-btn' style={{color : color , backgroundColor : bgcolor , borderRadius : radius}}>
            {text}
        </button>
    )
}

export default Button
