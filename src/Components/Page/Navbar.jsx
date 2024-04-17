import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/logo.jpg";
import userImg from "../../assets/user.png";

const Navbar = () => {
    const {user,logOut} = useContext (AuthContext)
    const handelSignOut = () => {
       logOut ()
       .then (result => {
        console.log (result.user)
       })
       .catch (error => {
        console.log (error.message)
       })
    }
  
    const navLinks = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/post">Recent Post</NavLink> </li>
        <li> <NavLink to="/works">Recent Works</NavLink> </li>

    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        {
                    user ? <li> <NavLink to="/update">Update Profile</NavLink> </li>:<li></li>
                }
                    </ul>
                </div>
                <img className="w-16 object-fill mix-blend-multiply" src={logo} alt="" />
                <h1 className="text-3xl font-bold">Forest Explore</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    { navLinks }
                {
                    user ? <li> <NavLink to="/update">Update Profile</NavLink> </li>:<li></li>
                }
                 
                </ul>
            </div>
          
            <div className="navbar-end">
                
                {
                    user?  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img title="UserName" className="w-full" src={userImg} />
                      </div>
                    </div>
                    </div> : <div></div>
                }
                {
                    user ?
                     <button onClick={handelSignOut} className="btn btn-secondary">Sign out</button>:
                   <Link to="/login"><button className="btn bg-green-600 text-white font-bold">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;