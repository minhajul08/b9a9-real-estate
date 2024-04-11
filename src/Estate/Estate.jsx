// import {useLoaderData} from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { FaChartArea } from "react-icons/fa";
const Estate = ({forest}) => {
    const {title,image,description,area,location} = forest;
    // const {estates} =  useLoaderData ()
    // console.log (estates)
    return (
        <div className="card card-compact shadow-xl">
  <figure><img className="h-72" src={image} alt="Shoes" /></figure>
  <div className="card-body mx-5 space-y-2">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="flex">
      <p className="flex items-center"><span className="mr-1"> 
      <FaChartArea /></span>{area}</p>
      <p className="flex items-center"><span className="mr-1">
      <IoLocationOutline/></span>{location}</p>
    </div>
    <div className="card-actions">
      <button className="btn bg-green-600 w-full text-white">Details</button>
    </div>
  </div>
</div>
    );
};

export default Estate;