import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsLoading(false);
        console.log(currentUser);
      }
    });

    return () => unSubscribe();
  }, []);

  const registerWithEmailPassword = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    isLoading,
    registerWithEmailPassword,
    loginWithEmailPassword,
    signOutUser,
  };

  <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
