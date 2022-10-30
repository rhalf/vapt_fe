import { auth } from "@/plugins/firebase";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";

export const login = (email, password) => {
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

export const logout = () => {
  return signOut(auth);
};
