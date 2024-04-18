import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";

const Works = () => {
    const projects = useLoaderData ();
     
    
    return (
  <div>
    <Helmet>
      <title>Recent works</title>
    </Helmet>
        <div className="mx-2 md:mx-4 lg:mx-12 font-openSans">
        <Navbar></Navbar>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3 lg:my-10  
       " >
       {
            projects.map (project =>  <div key={project.id} className="card bg-base-100 shadow-xl 
            "data-aos="fade-up"
            data-aos-duration="1000">
            <figure><img className="h-72 w-full" src={project.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-green-600">{project.name}</h2>
              <h2 className="texl text-gray-500">{project.title}</h2>
              <p>{project.description.slice(0,200)}</p>
              <div className="card-actions">
                <button className="btn px-6 text-white font-bold bg-green-600">More</button>
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

export default Works;