import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword]=useState(false);
    const [registerError, setRegisterError]=useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const {email, password, photoURL, fullName}=data;
      };
    return (
        <div>
           <div className="hero min-h-screen bg-base-200 rounded-3xl mb-8">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Create Your Account!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm bg-gray-300 border border-emerald-700">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered border-emerald-700"
                  name="fullName"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered border-emerald-700"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered border-emerald-700"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="input input-bordered border-emerald-700"
                  {...register("password", { required: true })}
                  
                />
                 <span className="absolute text-2xl right-3 bottom-3" onClick={()=>setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash>
                        : <FaEye></FaEye>
                    }
                </span>
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-emerald-700 text-white font-bold">Register</button>
              </div>
              <div className="text-center">
                <p>Already Have An Account? <Link to='/login' className="link link-success text-xl font-semibold no-underline">Login</Link></p>
              </div>
            </form>
            {registerError && (
              <p className="text-red-600 text-center mb-2">{registerError}</p>
            )}
            
          </div>
        </div>
      </div>
    </div>
        
    );
};

export default Register;