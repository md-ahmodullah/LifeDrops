import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init.js";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login User
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //   if (currentUser?.email) {
      //     const user = { email: currentUser.email };
      //     axios
      //       .post("https://edu-link-server.vercel.app/jwt", user, {
      //         withCredentials: true,
      //       })
      //       .then((res) => {
      //         console.log("login", res.data);
      //         setLoading(false);
      //       });
      //   } else {
      //     axios
      //       .post(
      //         "https://edu-link-server.vercel.app/logout",
      //         {},
      //         { withCredentials: true }
      //       )
      //       .then((res) => {
      //         console.log("logout", res.data);
      //         setLoading(false);
      //       });
      //   }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Update Profile
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  // Log Out
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    logOut,
    loading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
