import React, { useState } from 'react';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const auth = getAuth(); // Firebase auth object
  const navigate = useNavigate(); // Page navigate er jonne React Router

  // Form er state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Email change korle
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Password change korle
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Reload bondho
    setError(''); // Ager error clear

    // Firebase login
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login successful", userCredential);
        navigate('/'); // login successful hole dashboard e pathai
      })
      .catch((error) => {
        console.error("Login error", error);
        setError('Email or password thik nai. Abar try koro.'); // error dekhao user ke
      });
  };

  return (
    <section className='py-[80px]'>
      <Container>
        <div className="">
          <form className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input value={email} onChange={handleEmail} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[#FFFF] border-0 border-b-2 border-gray-300 appearance-none dark:text-[#000] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full group">
              <input value={password} onChange={handlePassword} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-[#FFFF] border-0 border-b-2 border-gray-300 appearance-none dark:text-[#000] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button onClick={handleSubmit} type="submit" class="mt-[10px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Login;
