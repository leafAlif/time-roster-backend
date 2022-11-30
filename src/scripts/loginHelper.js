import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { loginButton, loginStatus, logoutButton } from './utils/dom-shortcut';

const loginHelper = (auth) => {
  // Use GoogleAuth as Login method
  const loginProvider = new GoogleAuthProvider();
  loginProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  loginProvider.setCustomParameters({ prompt: 'select_account' });

  loginButton.addEventListener('click', () => {
    signInWithPopup(auth, loginProvider);
  });
  logoutButton.addEventListener('click', () => {
    signOut(auth);
  });

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      const userName = user.displayName;
      loginStatus.innerHTML = `${userName} is logged in!`;
      loginButton.disabled = 1;
      logoutButton.disabled = 0;
    } else {
      loginStatus.innerHTML = 'User Logged Out!';
      loginButton.disabled = 0;
      logoutButton.disabled = 1;
    }
  });
};

export default loginHelper;
