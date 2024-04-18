
import { Helmet } from "react-helmet";
import Estate from "../../Estate/Estate";
import Slider from "../Sliders/Slider";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const forests = useLoaderData();
    console.log(forests)
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
             <div className="mx-3 md:mx-12 font-openSans ">
            <Navbar></Navbar>
            <Slider></Slider>
           
            <div className="text-center mt-7">
                <h1 className="font-bold text-5xl">Forest Estates</h1>
                <p className="mt-6">Explore our collection of forest estates, each offering a unique opportunity to immerse yourself in nature's beauty.</p>
            </div>
          <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
                {
                    forests.map(forest => <Estate key={forest.id} forest={forest}></Estate>)
                    
                }
            </div>
          </div>
            
        </div>
        <Footer></Footer>
        </div>
       
    );
};

export default Home;