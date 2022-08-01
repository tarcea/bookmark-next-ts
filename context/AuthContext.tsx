import { createContext, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);
export const googleProvider = new GoogleAuthProvider();

interface ContextProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};