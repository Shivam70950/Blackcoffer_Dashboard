import React from 'react'
import './style.css'
const Menusection = ({arr,heading}) => {
    return (
        <div className='MenuSection'>
            <span>{heading}</span>
            <ul>
                {
                    arr.map(([icon,name])=>(
                        <div className="MenuSection_element">
                    {icon}
                    <li>
                        <span>{name}</span>
                    </li>
                </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Menusection
