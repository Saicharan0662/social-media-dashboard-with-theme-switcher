import React from 'react'

const CustomCheckbox = () => {
    return (
        <span className='switch'>
            <label htmlFor="theme-toggler"></label>
            <input type="checkbox" name="theme-toggler" checked={false} id="theme-toggler" />
            <span className="toggler"></span>
        </span>
    )
}

export default CustomCheckbox