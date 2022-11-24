import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

class loginHelper {
  constructor(auth) {
    this._auth = auth;
  }
  const loginProvider = new GoogleAuthProvider();
}

export default loginHelper;
