import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/user/user.selectors.js';


import './wrapper.styles.scss';

const Wrapper = ( props) => {
    console.log(props)
    return (
        <div className='wrapper'>
            {props.children}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Wrapper);
