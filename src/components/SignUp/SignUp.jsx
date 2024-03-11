import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2'


const SignUp = () => {
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { googleSignUp, signUp, handleUpdateProfile } = useContext(FirebaseContext);
    const navigate = useNavigate();
    //google
    const handleGoogle = () => {
        googleSignUp()
            .then(res => {
                console.log(res.user);
                Swal.fire({
  title: 'Congratulation!',
  text: 'You are Sign up successfully',
  icon: 'success',
  confirmButtonText: 'Well-done'
})
            })
            .catch(error => {
                console.log(error);
                
                Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
        })
    }
    //formSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        e.target.reset()
        console.log(email, name, password, photo);
        setError('')
        setPasswordError('')

        


        if (password.length < 6) {
            setError('Password should be at least 6 characters or longer')
            
            return;   
        }
        
        
        if (!/[A-Z]/.test(password)) {
            setPasswordError('Your password should have at least one upper case characters and one special character.')
            return;     
        }
       
   // creating a new user
        signUp(email, password)
            .then(res => {
                handleUpdateProfile(name, photo)
                    .then(() => {
                        console.log('update');
                         Swal.fire({
  title: 'Congratulation!',
  text: 'You are Sign up successfully',
  icon: 'success',
  confirmButtonText: 'Well-done'
                   })
                        navigate('/')

                    })
            })
            .catch(error => {
              
  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  
})  
            })
        
        
        // signUp
//         signUp(email,password)
//             .then(res => {
                              
                      
//                        updateProfile(name,photo)
//                         .then(() => {
//                              Swal.fire({
//   title: 'Congratulation!',
//   text: 'You are Sign up successfully',
//   icon: 'success',
//   confirmButtonText: 'Well-done'
//                    })
//                         })
//                            .catch((error) => {
//   Swal.fire({
//   icon: 'error',
//   title: 'Oops...',
//   text: 'Something went wrong!',
  
// })
//                                 });

                
                
//             })
            
    }
  return (
    <div className=' flex justify-center py-10'>
      <div className="grid max-w-md w-full gap-6 px-12 max-sm:px-6 py-8 rounded-lg dark:text-zinc-100 text-zinc-800 sm:ring-1 ring-zinc-300 dark:ring-zinc-800 m-4 bg-[#fafafa] dark:bg-gray-900">
              <h2 className="text-4xl font-bold my-4 mb-6">Sign up</h2>
              {
                  error && <p className='text-red-800'>{error }</p>
              }
              {
                  passwordError && <p className='text-red-800'>{passwordError }</p>
              }
              <form onSubmit={handleSubmit} >
                  <div className="grid gap-1 w-full dark:text-gray-200">
        <label for="name" className="">Full Name</label>
        <input id="name" type="text" placeholder="Full name" name='name' className="placeholder:text-gray-500 placeholder:font-normal border-zinc-300 dark:border-zinc-700 focus-visible:outline-zinc-500 border focus-visible:outline-2 focus-visible:outline dark:focus-visible:outline-zinc-500 focus-visible:border-transparent py-2 px-3 rounded bg-transparent" />
    </div>
    <div className="grid gap-1 w-full dark:text-gray-200">
        <label for="email" className="">Email</label>
        <input id="email" type="email" placeholder="Email" name='email'  className="placeholder:text-gray-500 placeholder:font-normal border-zinc-300 dark:border-zinc-700 focus-visible:outline-zinc-500 border focus-visible:outline-2 focus-visible:outline dark:focus-visible:outline-zinc-500 focus-visible:border-transparent py-2 px-3 rounded bg-transparent" />
    </div>
    <div className="grid gap-1 w-full dark:text-gray-200">
        <label for="password" className="">Password</label>
        <input id="password" type="password" placeholder="Password" name='password' className="placeholder:text-gray-500 placeholder:font-normal border-zinc-300 dark:border-zinc-700 focus-visible:outline-zinc-500 border focus-visible:outline-2 focus-visible:outline dark:focus-visible:outline-zinc-500 focus-visible:border-transparent py-2 px-3 rounded bg-transparent" />
    </div>
    <div className="grid gap-1 w-full dark:text-gray-200">
        <label for="password" className="">Photo url</label>
        <input id="photo" type="password" placeholder="Photo url" name='photo' className="placeholder:text-gray-500 placeholder:font-normal border-zinc-300 dark:border-zinc-700 focus-visible:outline-zinc-500 border focus-visible:outline-2 focus-visible:outline dark:focus-visible:outline-zinc-500 focus-visible:border-transparent py-2 px-3 rounded bg-transparent" />
    </div>
    <button className="bg-pink-700 text-white w-full mx-auto font-semibold dark:text-white mt-2 hover:border-black focus-visible:outline-black/50 px-6 py-2 rounded-md border-[1.5px] border-transparent transition-colors duration-100 focus-visible:outline active:scale-[0.99]">
        Create account
    </button>
    </form>
    <div className="flex items-baseline justify-between text-sm font-semibold">
        Already have an account ?
        <Link to="/login" className="underline">Sign in</Link>
    </div>
    <div className="flex justify-between items-center">
        <span className="h-[1px] basis-full bg-zinc-300 dark:bg-zinc-600"></span>
        <span className="mx-2.5 dark:text-zinc-200 -translate-y-0.5">OR</span>
        <span className="h-[1px] basis-full bg-zinc-300 dark:bg-zinc-600"></span>
    </div>
    <div className="flex gap-4 text-center">
        <button className="bg-blue-500 dark:bg-blue-500 text-white w-full mx-auto font-semibold mt-2 px-6 py-2 rounded-md border-[1.5px] border-transparent transition-colors duration-100">
            Facebook
        </button>
        <button onClick={handleGoogle} className="bg-pink-700 text-white w-full mx-auto font-semibold mt-2 px-6 py-2 rounded-md border-[1.5px] border-transparent transition-colors duration-100">
            Google
        </button>
    </div>
</div>

    </div>
  );
};

export default SignUp;