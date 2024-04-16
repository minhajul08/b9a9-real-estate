
// , useParams
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Page/Navbar";
import Footer from "../Components/Page/Footer";
import { IoLocationOutline } from "react-icons/io5";
import { FaChartArea, FaCheckCircle } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { Helmet } from "react-helmet";
const EstateDetails = () => {
    const forests = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = forests.find(job => job.id === idInt)
    console.log(job)
    const { title, image, name, description, price, status, area, location, facilities } = job;


    return (
        <div>
            <div className="mx-12">

                <Navbar></Navbar>
                <Helmet>
                    <title>Estate-Details</title>
                </Helmet>

                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 lg:gap-20 my-5 lg:my-10"  
                data-aos="fade-up"
                     data-aos-easing="linear"
                     data-aos-duration="1000">
                    <div className="col-span-3 ">
                        <img className="h-full rounded-lg" src={image} alt={title} />
                    </div>
                    <div className="col-span-4 space-y-3 md:space-y-6"
                    >
                        <p className="text-green-600 text-xl uppercase mt-3">About with us</p>
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">{name} ,<br /><span>{title}</span></h1>
                        <p className="text-gray-600">{description}</p>
                        <hr />
                        <div>{
                            facilities.map(facility => <p key={facility}>
                                <p className="flex items-center"><FaCheckCircle className="mr-1 text-green-600" /> {facility}</p>
                            </p>)
                        }</div>
                        <hr />
                      
                        <div className="flex">
                            <p className="flex items-center mr-6"><span className="mr-1">
                                <FaChartArea /></span>{area}</p>
                            <p className="flex items-center"><span className="mr-1">
                                <IoLocationOutline /></span>{location}</p>
                        </div>
                        <div className="flex items-center  ">
                            <p className="mr-6 bg-[#388d38] text-white px-4 py-2 rounded-md">{status}</p>
                            <p className="flex items-center"><BsCurrencyDollar className="mr-1  " /> {price}</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>


    );
};

export default EstateDetails;