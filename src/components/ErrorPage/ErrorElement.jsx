import { Link } from "react-router-dom";
import notfound from '../../assets/404.gif';

const ErrorElement = () => {
    return (
        <div>
             <div className="text-center mb-8">
              <img className="mx-auto w-[500px]" src={notfound} alt="" />
              <p className="text-5xl font-bold mb-3">Your Content</p>              
              <h2 className="text-4xl font-bold">Not Found</h2>
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2 text-green-500">Back to Home</h1>
              <Link to='/'>  <button className="btn text-xl font-bold w-1/6 my-3 bg-emerald-700 text-white">Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;