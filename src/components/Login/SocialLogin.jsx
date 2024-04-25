const SocialLogin = () => {
    return (
        <div className="text-center">
        <h1 className="text-xl font-semibold mb-3 divider font-serif">Login With</h1>
        <button
          className="btn font-serif btn-outline btn-sm btn-success w-1/3 mr-2"
        >
          Google
        </button>
        <button
          className="btn font-serif btn-outline btn-sm btn-success w-1/3"
        >
          Github
        </button>
      </div>
    );
};

export default SocialLogin;