import React from 'react'
import CustomIcon from '../CustomIcon/CustomIcon'

const SmallCard = ({ icon = "facebook", text = "Page Views", count = "87", stats = "3", width = "19", height = "19", increased = true }) => {
    return (
        <div className='small-box'>
            <div className='small-card-top'>
                <span className='title-text'>{text}</span>
                <CustomIcon iconName={icon} alt={icon} width={width} height={height} />
            </div>
            <div className='small-card-bottom'>
                <span className='count-text'>{count}</span>
                <span className='stats'>
                    {increased ?
                        <>
                            <CustomIcon iconName="up" alt="up" height='6px' width='6px' />
                            <span >{stats}%</span>
                        </>
                        : <>
                            <CustomIcon iconName="down" alt="down" height='6px' width='6px' />
                            <span className='down'>{stats}%</span>
                        </>}
                </span>
            </div>
        </div>
    )
}

export default SmallCard