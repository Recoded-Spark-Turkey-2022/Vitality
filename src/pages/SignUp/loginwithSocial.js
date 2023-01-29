/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from 'firebase/auth';
import { FaFacebook } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import {db} from  "../../config/fire";
import line from '../../assets/images/line.png';

function LoginwithSocial() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const providerFB = new FacebookAuthProvider();
  const navigate = useNavigate();

  async function handleGoogleSignUp() {
    await signInWithRedirect(auth, provider);
  }

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        const docRef = doc(db, 'users', user.email);
        const docSnap = await getDoc(docRef);
    
          setDoc(doc(db, 'users', user.email), {
            name: user.registerName,
            surname: user.registerSurname,
            email: user.registerEmail,
            birthdate:  user.registerbirthDate,
          });
          setIsSignedUp(true);
        }
      )
      .catch(async (error) => {
        if (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = await error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }
      });
  }, []);

  useEffect(() => {
    if (isSignedUp) {
      const timer = setTimeout(() => navigate('/'), 2000);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [isSignedUp]);

  function handleFBSignup() {
    signInWithRedirect(auth, providerFB);
  }
  return (
   
    <div className="">
      <div className="d-flex items-center mt-1 justify-center">
      <img src={line} alt="line"  />
       <p>Or</p>  
       <img src={line} alt="line"  />
        </div> 
       <button
        type="button"
        className="social mr-2"
        onClick={() => handleFBSignup()}
      >
        <FaFacebook />
      </button>

      <button
        type="button"
        className="social"
        onClick={() => handleGoogleSignUp()}
      >
        <GrGoogle />
      </button>
    </div>
  );
}

export default LoginwithSocial;
