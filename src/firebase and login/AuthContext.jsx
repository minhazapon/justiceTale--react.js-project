import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

 
export const fireContext = createContext(null)

       const InGle = new GoogleAuthProvider(null)

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)

    
    const [Loading, setLoad] = useState(true)


    const createUser = (email, password) =>{
      setLoad(true)
      return createUserWithEmailAndPassword(auth, email, password)

    }
    const signOn = (email, password) =>{
        setLoad(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
    const G = () =>{
        setLoad(true)
        return signInWithPopup(auth, InGle)
    }
    const logOut = () =>{
        setLoad(true)
        signOut(auth)
    }
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged( auth,  currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
            setLoad(false)
        } )
        return() => {
            unSubscribe();
         }
    } , [])
    const authInfo = {user, createUser, signOn, G, logOut, Loading }
    return (
        <div>

            <fireContext.Provider  value={authInfo} >

                {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;