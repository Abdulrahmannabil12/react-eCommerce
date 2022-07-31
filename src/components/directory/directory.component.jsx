import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { selectDirectorySections } from '../../Redux/directory/directory.selectors';
 import { connect } from 'react-redux';

const Directory = ({ directory }) => {
 console.log(directory)
    return (
        <div className='directory-menu'>
            {directory?.sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
}
 
const mapStateToProps =  (state)=>{
return{
    directory: selectDirectorySections(state)
}
};
 export default connect(mapStateToProps)(Directory);
