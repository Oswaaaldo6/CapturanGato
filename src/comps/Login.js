import React from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../firebase/config';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth';

function Login() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/home'; 
        navigate(path);
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.info(token);
        console.info(user);

        routeChange();
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.info(errorCode);
        console.info(errorMessage);
        console.info(email);
        console.info(credential);
        });
    }

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      console.info(accessToken);
      console.info(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);

      console.info(errorCode);
      console.info(errorMessage);
      console.info(email);
      console.info(credential);
    });
  }

  return (
    <>
    <div class="contenedor5" >
      <h1>"ʟᴀ ᴛɪᴇɴᴅᴀ ᴅᴇ ʀᴏᴘᴀ Qᴜᴇ ꜱɪᴇᴍᴘʀᴇ ᴇꜱᴛᴀ ᴀ ʟᴀ ᴍᴏᴅᴀ"</h1>
      </div>  
    <div class="contenedor" >
      <h1>Cazando a el Gato</h1>
      </div>    
      <div class="contenedor2" >
        <h1>INICIAR SESION </h1>
      </div>
      <div class="contenedor6" >
      <p>Inicia sesion con alguna Red Social</p>
      </div>
      <div class="contenedor3" >
        <button class='button3' onClick={signInWithGoogle}>
          Iniciar sesion con Google
        </button>
        <button class='button2'onClick={signInWithFacebook}>
          Iniciar sesion con Facebook
        </button>
      </div>
      <div class="contenedor4" >
      <p>¿Tienes problemas para Iniciar Sesion?</p>
      </div>

    </>
   
  );
}

export default Login;