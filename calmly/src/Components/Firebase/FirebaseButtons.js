import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import firebaseConfig from './FirebaseCredentials'
import './FirebaseButtons.css'


class SignInScreen extends React.Component {
  state = {
    isSignedIn: false,
    // Local signed-in state.
  };
  // Configure FirebaseUI.
  uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/news-feed',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.setState({ isSignedIn: true });
        } else {
          this.setState({ user: null });
        }
      }
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      );
    }
  }
}
export default SignInScreen