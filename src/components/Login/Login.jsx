import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const {email, password, fullName,photoURL}=data;
      }


    return (
   <div>
     
     <div className="hero min-h-screen bg-base-200 rounded-3xl mb-8">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Login Your Account!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm bg-gray-300 border border-emerald-700 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
                <div>
                 
                 <button className="btn text-white font-semibold text-xl bg-emerald-700 w-full">Login</button>

                </div>
              <div className="text-center">
                <p className="font-semibold">Don't Have An Account? <Link to='/register' className="link link-success font-bold no-underline">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div> 

   </div>
    );
};

export default Login;