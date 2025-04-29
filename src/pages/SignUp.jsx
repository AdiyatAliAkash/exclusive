import React, { useState } from 'react'
import Container from '../components/Container'
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import signUp from '../assets/signup.png'

const SignUp = () => {
    const auth = getAuth();
    let navigate = useNavigate()
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [error, setError] = useState('')

    let handleEmail = (e) => {
        setEmail(e.target.value);
    }

    let handlePassword = (e) => {
        setPassword(e.target.value);
    }


    let handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please Enter Your Email')
        } else if (!password) {
            setError('Please Enter Your Password')
        } else {
            
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                navigate('/login')
                setEmail('');
                setPassword('');
          
              })
              .catch((error) => {
                // if (error.code === 'auth/email-already-in-use') {
                //   console.log("Ei email diye already account ache. Please login or use another email.");
                // } else {
                //   console.log("Signup e kichu problem hoyeche. Try again.");
                // }
              });
        }
        
      };
      
    return (
        <section className="pt-[60px] pb-[140px]">
            <Container>
                <div className="flex gap-32">
                    <div className="w-[40%]">
                        <img className='w-[100%]' src={signUp} alt="" />
                    </div>

                    <div className="w-full h-[50%] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:border-gray-700">
                        <form className="max-w-md mx-auto">
                            <div className="relative z-0 w-full mb-5 group">
                                <input value={email} onChange={handleEmail} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[#FFFF] border-0 border-b-2 border-gray-300 appearance-none dark:text-[#000] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full group">
                                <input value={password} onChange={handlePassword} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[#FFFF] border-0 border-b-2 border-gray-300 appearance-none dark:text-[#000] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <h3 className="pb-3 text-[#eb3939] font-inter">{error}</h3>
                            <button onClick={handleSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SignUp