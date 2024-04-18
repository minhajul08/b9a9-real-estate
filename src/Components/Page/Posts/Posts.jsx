import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import moment from "moment";
import { FaRegComment } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { PiBookOpenTextBold } from "react-icons/pi";
import { Helmet } from "react-helmet";
const Posts = () => {
  const newPost = useLoaderData ()
  console.log (newPost)
    return (
        <div>
           <Helmet>
                <title>Post</title>
            </Helmet>
        <div className="mx-2 md:mx-4 lg:mx-12 font-openSans">
        <Navbar></Navbar>
     <div className="my-10">
     {
          newPost.map (post => <div key={post.id} className="card md:w-3/4 mx-auto mt-5 shadow-lg bg-base-100 "
          data-aos="fade-up"
            data-aos-duration="1000">
          <figure><img className="rounded-lg mt-4" src={post.image} alt={post.title} /></figure>
          <div className="grid grid-cols-7 items-center justify-between">
            <div className="card-title col-span-1 ml-3 text-2xl ml-2 md:ml-6 lg:ml-20">{
              moment().format("D MMM")
              
            }</div>
           
            <div className="col-span-6 my-4">  
            <p className="text-3xl font-bold text-green-600">{post.title}</p>
            <div className="flex gap-5 mt-3 text-gray-400 font-medium">
              <p className="flex items-center"><span className="mr-1"><FaRegComment /></span> {post.comment}</p>
              <h1 className="flex items-center"><span className="mr-1"><FaPen /></span> {post.author}</h1>
              <h1 className="flex items-center"><span className="mr-1"><PiBookOpenTextBold /></span> {post.writer}</h1>
              
            </div>
            <p className="mt-3">{post.description}</p>
            </div>
            
          </div>
        </div>)
        }
     </div>
          
      </div>
      <Footer></Footer>
    </div>
    );
};

export default Posts;