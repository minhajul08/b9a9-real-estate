import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser,updateUserProfile } = useContext(AuthContext);
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const {email,password,image,name} = data;
     setRegisterError('');
    setRegisterSuccess('');
    //  password condition
    if (password.length < 6) {
      return toast.error('password must be 6 character');
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error('Password must have an Uppercase letter in the password');
    }
    if (!/[a-z]/.test(password)) {
      return toast.error('Password must have an lowercase letter in the password');
    }

    // create user and update profile
    
    createUser(email, password)
    .then(result => {
      updateUserProfile (name,image)
      .then ( () => {
        
      })
      console.log(result.user)
      
     setRegisterSuccess(toast('user created successful'))
    })
    .catch(error => {
      // console.log (error)
      setRegisterError(toast.error(error.message))
    })
 
   
  }

  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  
 

  // }
  return (
    <div>
      <Navbar></Navbar>
       <Helmet>
        <title>Register</title>
       </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card shrink-0  md:w-[500px] shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold mb-8 text-center">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" 
                 {...register("name", { required: true })}  />
                 {errors.name && <span className="text-red-500">please type your name</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" {...register("image")} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" 
                 {...register("email", { required: true })} />
                 {errors.email && <span className="text-red-500">please type your email</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password </span>
                </label>
                <input type={showPassword ? "text" : "password"}
                name='password'
                  placeholder="Password"
                  className="input input-bordered relative"
                  {...register("password", { required: true })}
                   />
                   {errors.password && <span className="text-red-500">please type your password</span>}
                  <span className="absolute bottom-[196px] right-10" onClick={ () => setShowPassword (!showPassword) }>
                    {showPassword ? <FaEyeSlash></FaEyeSlash> :
                     <FaEye></FaEye>
                  }
                  </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
             
              <div className="form-control mt-6">
                <button className="btn bg-green-600 text-white text-xl">Register</button>
              </div>
            </form>

            <ToastContainer />

            {
              <p className="ml-3 mb-4 text-center">Already have account? <Link className="text-blue-600 font-bold hover:underline" to="/login">Login</Link></p>
            }
          </div>


        </div>
      </div>
      <Footer> {
                registerError
              }
              {
                registerSuccess
              }
             </Footer>
   
    </div>
  );
};

export default Register;