import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import RoutesDta from './global/routes';
import Header from './components/header/header.component.jsx';
import Wrapper from './components/wrapper/wrapper.component.jsx';
import { useEffect, useRef } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './Redux/user/user.actions.js';
import { selectCurrentUser } from './Redux/user/user.selectors.js';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
const App = ({ setCurrentUser, currentUser })=> {
  var unsubscribeFromAuth = useRef({ });

  console.log(currentUser,'sdggggg')

  useEffect(() => { 

 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    }
  }, [])
 

 

 
    return (
      <div className="App">
      
       <Router>
          <Header/>
          <Wrapper>
                      <RoutesDta />

          </Wrapper>
        </Router>
     
       
      </div>
    );
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
 });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
