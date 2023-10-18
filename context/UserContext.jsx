/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../src/firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    // Recuperar información de usuario activo
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, photoURL, displayName, uid } = user;
                setUser({ email, photoURL, displayName, uid });
                console.log(user);
            } else {
                setUser(null);
            }
        });
        return () => unsuscribe();
    }, []);

    // registrar usuario

    const registerUser = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    // Iniciar sesión

    const loginUser = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    // Cerrar sesión

    const singOutUser = () => signOut(auth);

    return (
        <UserContext.Provider
            value={{ user, setUser, loginUser, registerUser, singOutUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
