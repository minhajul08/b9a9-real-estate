
import Estate from "../../Estate/Estate";
import Footer from "./Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Hero></Hero>
            <Estate></Estate>
             <Footer></Footer>
        </div>
    );
};

export default Home;