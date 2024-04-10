import { FiPhone } from "react-icons/fi";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineEmail,MdOutlineWatchLater } from "react-icons/md";
const Footer = () => {
    return (
        <div>
          <footer className="footer p-10 bg-base-200 text-base-content">
   <div className="">
   <p className="font-bold text-xl">ForestExplorer</p>
    <p className="mt-8 text-wrap">Every forest is a complex living system made up of thickly growing trees, bushes, vines, fungi, and other plants. Forests are also the homes of mammals, birds, insects, and many other animals
    </p>
   </div>
  <nav>
    <h6 className="footer-title">Contract Info</h6> 
     <a className="link link-hover"> Address: 184 Main Collins Street West <br></br> Victoria 8007</a>
     <div className="flex">
        <FiPhone className="mr-2" />
    <a className="link link-hover"> +1800-222-3333</a></div>
     <div className="flex">
     <CiMobile4 className="mr-2" />
     <a className="link link-hover"> +1833-232-3443</a>
     </div>
    <div className="flex items-center">
    <MdOutlineEmail className="mr-2" />
    <a className="link link-hover">contact@greennaturewp.com</a>
    </div>
  </nav> 
  <nav>
    <h6 className="footer-title">Recent Posts</h6> 
     <div>
        <div className="flex gap-2 justify-center items-center">
        <img className="w-32" src="/src/assets/img4.jpg" alt="" />
        <div className="footer-title">
        <p>Team Member</p>
        <p className="flex items-center"> <MdOutlineWatchLater className="mr-1"/> 21 Mar 2014</p>
        </div>
        </div>
        <hr className="border-black mt-3 mb-3"></hr>
        <div className="flex gap-2 justify-center items-center">
        <img className="w-32" src="/src/assets/img5.jpg" alt="" />
        <div className="footer-title">
        <p>Volunteer</p>
        <p className="flex items-center"> <MdOutlineWatchLater className="mr-1"/> 21 Mar 2014</p>
        </div>
        
        </div>
        <hr className="border-black mt-3"></hr>
     </div>
  </nav> 
  <nav>
    <h6 className="footer-title">Recent Works</h6> 
    <div className="grid grid-cols-3 gap-2">
        <img src="/src/assets/img7.jpg" alt="" />
        <img src="/src/assets/img8.jpg" alt="" />
        <img src="/src/assets/img9.jpg" alt="" />
        <img src="/src/assets/img10.jpg" alt="" />
        <img src="/src/assets/img11.jpg" alt="" />
        <img src="/src/assets/img6.jpg" alt="" />
    </div>
  </nav>
</footer>
<footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <aside className="items-center grid-flow-col">
    
    <p className="footer-title">Copyright © 2024 -ForestExplore</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;