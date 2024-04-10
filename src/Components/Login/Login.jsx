import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";

const Login = () => {
  const googleProvider = new GoogleAuthProvider ();
  const githubProvider = new GithubAuthProvider ();

  // google signIn
  const handelGoogleSign = () => {
    signInWithPopup (auth,googleProvider)
    .then (result => {
      console.log (result.user)
    })
    .catch (error => {
      console.log (error.message)
    })
  }
  const {signIn} = useContext (AuthContext)
  const handelLogin = e => {
    e.preventDefault ();
    const form = new FormData (e.currentTarget)
    const email = form.get ('email')
    const password = form.get ('password')
    console.log (email,password);
    signIn (email,password)
    .then (result => {
      console.log (result.user)
    })
    .catch (error => {
      console.error(error)
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
          <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
            <h1 className="text-5xl font-bold mb-8">Login now!</h1>
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
                <button className="btn btn-primary">Login</button>
              </div>
              <button className="btn btn-primary" onClick={handelGoogleSign}>SIgn in with google</button>
              <button className="btn btn-primary" onClick={handelGithubSignIn}>SIgn in with github</button>
            </form>
            {
              <p className="ml-3 mb-4">New in this account? <Link className="text-blue-600 font-bold hover:underline " to="/register">Register</Link></p>
            }
          </div>
        </div>
      </div>     
      <Footer></Footer>
        </div>
    );
};

export default Login;