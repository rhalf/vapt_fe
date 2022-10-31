import { auth } from "@/plugins/firebase";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence,
  signOut as logOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

export const signIn = (email, password) => {
  return setPersistence(auth, browserLocalPersistence).then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    // return signInWithEmailAndPassword(auth, email, password);

    return signInWithEmailAndPassword(auth, email, password);
  });
};

export const signOut = () => {
  return logOut(auth);
};

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const updateDetails = (name, mobile) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    phoneNumber: mobile,
  });
};

export const emailVerification = () => {
  return sendEmailVerification(auth.currentUser);
};

export const passwordResetEmail = (email) => {
  return sendPasswordResetEmail(auth, email);
};
