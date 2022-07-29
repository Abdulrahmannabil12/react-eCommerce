import React from 'react'
import "./collection-perview.styles.scss"
import CollectionItem from "../../components/collection-item/collection-item.component.jsx"

export default function CollectionPreview({ title, items, ...rest }) {

    return (
        <>
            <div className='collection-preview'    >
                <div className="title"> {title?.toUpperCase()} </div>
                    <div className="preview">

                    {items?.slice(0, 4).map(item=>(
                       
                        <div key={item.id} > {<CollectionItem {...item} />}</div>))}
                    </div>
                </div>
            
        </>
    )
}

