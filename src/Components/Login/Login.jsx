import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import { Helmet } from "react-helmet";

const Login = () => {
  const location = useLocation ();
  const navigate = useNavigate ();
  console.log ("location in the login page",location)
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const googleProvider = new GoogleAuthProvider ();
  const githubProvider = new GithubAuthProvider ();

  
  const {signIn} = useContext (AuthContext)
  const handelLogin = e => {
    e.preventDefault ();
    const form = new FormData (e.currentTarget)
    const email = form.get ('email')
    const password = form.get ('password')
    console.log (email,password);
    setLoginError('');
    setLoginSuccess('');
    signIn (email,password)
    .then (result => {
      console.log (result.user)

      setLoginSuccess(toast('user created successful'))
      navigate (location?.state ? location.state : '/')
    })
    .catch (error => {
      console.error(error)
      setLoginError(toast.error(error.message))
    })
  }

  // google signIn
  const handelGoogleSign = () => {
    signInWithPopup (auth,googleProvider)
    .then (result => {
      console.log (result.user)
      
    })
    .catch (error => {
      console.log (error)
      
    })
  }
  

  // github signIn

  const handelGithubSignIn = () => {
      signInWithPopup (auth,githubProvider)
      .then (result => {
        console.log (result.user)
      })
      .catch (error => {
        console.log (error)
      })
  }
    return (
        <div>
          <Navbar></Navbar>
          <Helmet>
            <title>Login</title>
          </Helmet>
          <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card shrink-0   md:w-[500px] shadow-2xl bg-base-100 ">
            <form onSubmit={handelLogin} className="card-body">
            <h1 className="text-5xl font-bold mb-8 text-center">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-600 text-white text-lg ">Login</button>
              </div>
              {
              <p className="mx-auto mb-1">Don't have account? <Link className="text-blue-600 font-bold hover:underline " to="/register">Register</Link></p>
            }
            <p className="text-center mb-2">Or</p>
             <button className="btn bg-blue-600 text-white text-lg mb-2" onClick={handelGoogleSign}> <span className="w-6 h-6 bg-white  flex items-center mr-10"><FcGoogle className="mx-auto" /></span> Connect with Google</button>
             <button className="btn bg-blue-900 text-black text-lg mb-2" onClick={handelGithubSignIn}> <span className=" w-6 h-6 flex bg-white items-center mr-10"><FaXTwitter  className="mx-auto " /></span> <span className="text-white">Connect with Twitter</span></button>
            </form>
            {
              loginError
            }
            {
              loginSuccess
            }
          </div>
          <ToastContainer />
        </div>
      </div>     
      <Footer></Footer>
        </div>
    );
};

export default Login;