import React from 'react'
import MenuItem from '../../components/menu-item/menu-item.component'
import "./home-page.styles.scss"
export default function HomePage() {
    const items = require('../../Data/sections.data.json');
 
    
    return (
        <>
            <div className="homepage">
                <div className="directory-menu">
                    {items.data.map(({id,...data})=>{
                        return <MenuItem key={id} {...data} />
              })}
                </div>
            </div>

        </>
    )
}

