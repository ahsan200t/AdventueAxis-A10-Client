import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { signInUser,setUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        if(result.user){
          toast("Successfully Login");
          navigate(location?.state || '/');
          setUser(true)
        }   
      })
      .catch(() => {
        setLoginError("Password did Not Match");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 rounded-3xl mb-8">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif">
              Login Your Account!
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm bg-gray-300 border border-emerald-700">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered border-emerald-700"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered border-emerald-700"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <button className="btn text-white font-semibold text-xl bg-emerald-700 w-full font-serif">
                  Login
                </button>
              </div>
              <div className="text-center">
                <p className="font-semibold">
                  Don't Have An Account?{" "}
                  <Link
                    to="/register"
                    className="link link-success font-bold no-underline font-serif"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
            {loginError && (
              <p className="text-red-600 text-center mb-2">{loginError}</p>
            )}
            <div className="mb-4">
              <SocialLogin></SocialLogin>
            </div>
          </div>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Login;
