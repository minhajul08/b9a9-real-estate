import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
 
const Register = () => {
  const { createUser} = useContext (AuthContext);
  const handelRegister = e => {
    e.preventDefault ();
    const form = new FormData (e.currentTarget)
    const name = form.get ('name')
    const photoUrl = form.get ('photo')
    const email = form.get ('email')
    const password = form.get ('password')
    console.log (name,photoUrl,email,password);
    createUser (email,password)
    .then (result => {
      console.log (result)
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
            <form onSubmit={handelRegister} className="card-body">
            <h1 className="text-5xl font-bold mb-8">Register now!</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-600">Register</button>
              </div>
            </form>
            {
              <p className="ml-3 mb-4 text-center">Already have account? <Link className="text-blue-600 font-bold hover:underline" to="/login">Login</Link></p>
            }
          </div>
        </div>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Register;