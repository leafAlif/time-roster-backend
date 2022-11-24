import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

const loginHelper = (auth) => {
  // Use GoogleAuth as Login method
  const loginProvider = new GoogleAuthProvider();
  loginProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  loginProvider.setCustomParameters({ prompt: 'select_account' });

  const loginStatus = document.querySelector('#login-status');
  const loginButton = document.querySelector('#login-button');
  const logoutButton = document.querySelector('#logout-button');

  loginButton.onclick = () => signInWithPopup(auth, loginProvider);
  logoutButton.onclick = () => signOut(auth);

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
