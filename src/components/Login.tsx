import React from 'react';
import { auth } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { IonItem } from '@ionic/react';

const Login: React.FC = () => {
    const LoginWhitGoogle = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithPopup(auth, provider)
            .then(async (result: any) => {
                localStorage.setItem('uid', result.user.uid);
                localStorage.setItem('UserPhoto', result.user.photoURL);
                localStorage.setItem('UserName', result.user.displayName);
                localStorage.setItem('UserEmail', result.user.email);
                document.getElementById('link')?.click()
            }).catch((error: any) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential)
            });
    }
    return (
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12 lg:pt-24 pt-24 pe-3 px-3">
            <div className="rounded-xl bg-indigo-700/50 shadow-xl shadow-gray-600">
                <div className="p-6 sm:p-16">
                    <div className="space-y-4">
                        <h2 className="mb-8 text-2xl text-cyan-100 font-bold">Inicie sesión para desbloquear el sistema.</h2>
                    </div>
                    <IonItem className='hidden' routerLink='/page/Inicio' id='link' />
                    <div className="mt-16 grid space-y-4">
                        <button onClick={LoginWhitGoogle} className="group h-12 px-6 border-2 border-cyan-400 rounded-full transition duration-300 
hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 bg-gray-800 ">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                <span className="block w-max font-semibold tracking-wide text-gray-100 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base ">Continue with Google</span>
                            </div>
                        </button>
                        <button className="group h-12 px-6 border-2 border-cyan-400 bg-gray-800 rounded-full transition duration-300 
hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-100 hover:text-gray-700" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                <span className="block w-max font-semibold tracking-wide text-gray-100 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                            </div>
                        </button>
                        <button className="group h-12 px-6 border-2 border-cyan-400 bg-gray-800 rounded-full transition duration-300 
                                 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base text-white">Continue with Facebook</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;