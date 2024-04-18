import { Helmet } from "react-helmet";
import Navbar from "../Components/Page/Navbar";
import Footer from "../Components/Page/Footer";
import { useForm } from "react-hook-form";


const Update = () => {

    // react hook form
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => {
      console.log (data);
    }
    return (
       <div className="">
         <div className="mx-12">
            <Navbar></Navbar>
            <Helmet>
                <title>Update-Profile</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card shrink-0  md:w-[500px] shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold mb-8 text-center">Update Profile</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" 
                 {...register("name", { required: true })}  />
                 {errors.name && <span className="text-red-500">please type your name</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" {...register("image")} />
              </div>
             
              <div className="form-control mt-6">
                <button className="btn bg-green-600 text-white text-xl">Save Change</button>
              </div>
            </form>
        
          </div>


        </div>
      </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Update;