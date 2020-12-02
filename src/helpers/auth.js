import { auth } from '../services/firebase';

export function signup(email, password, dob, address) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function resetPassword(email) {
  return auth().sendPasswordResetEmail(email);
}
export function logout() {
  return auth().signOut()
}