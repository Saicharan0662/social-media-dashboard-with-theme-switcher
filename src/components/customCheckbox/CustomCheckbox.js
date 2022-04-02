import React from 'react'

const CustomCheckbox = ({ isChecked, setIsChecked }) => {
    return (
        <span className='switch'>
            <label htmlFor="theme-toggler">
                <input type="checkbox" name="theme-toggler"
                    id="theme-toggler"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <span className="toggler"></span>
            </label>
        </span>
    )
}

export default CustomCheckbox