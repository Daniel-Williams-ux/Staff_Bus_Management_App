
import { firebase, ui, uiConfig } from '../../Firebase';
import { useEffect } from 'react';
import './index.scss';

const Home = () => {
  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  // Initialize FirebaseUI with the uiConfig object
  useEffect(() => {
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div>
      <h1>Staff Bus Management App</h1>
      <div id="firebaseui-auth-container"></div>
      {firebase.auth().currentUser && (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
    </div>
  );
};

export default Home;