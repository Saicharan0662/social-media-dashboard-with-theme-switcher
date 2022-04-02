import React from 'react'
import CustomIcon from '../CustomIcon/CustomIcon'

const BigCard = ({ icon, username = "nathanf", followersCount = 1987, stats = 12, type = "Followers", increased = true, ...otherProps }) => {
    return (
        <div className='big-card' {...otherProps}>
            <p className='username'>
                <CustomIcon iconName={icon} alt={icon} height='16px' width='16px' />
                <span>@{username}</span>
            </p>
            <div className="followers-box">
                <h2>{followersCount}</h2>
                <p>{type}</p>
            </div>
            <p className='stats'>
                {increased ?
                    <>
                        <CustomIcon iconName="up" alt="up" height='6px' width='6px' />
                        <span>{stats} Today</span>
                    </>
                    : <>
                        <CustomIcon iconName="down" alt="down" height='6px' width='6px' />
                        <span className='down'>{stats} Today</span>
                    </>}

            </p>
        </div>
    )
}

export default BigCard