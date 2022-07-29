import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../Redux/user/user.selectors.js';

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) =>{
     return (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
             </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                <Link className='option' to='/signin' onClick={() => auth.signOut()}>
                    SIGN OUT
                </Link>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
        </div>
    </div>
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
 });

export default connect(mapStateToProps)(Header);
