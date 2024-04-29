const ContactUs = () => {
  return (
    <div className="font-serif bg-slate-300 p-10 rounded-2xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3">Contact With Us</h1>
        <p>
          We are most Excited to contact With You.We are Try to Serve Our Best
          service.if Any Query, Please Drop a Text.
        </p>
      </div>
      <div className="mt-10">
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input bg-slate-100 input-bordered border-emerald-700 w-full"
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input bg-slate-100 input-bordered border-emerald-700 w-full"
            />
          </div>
        </div>
        <div className="form-control">
            <label className="label">
              <span className="label-text card-title font-serif">
                Message
              </span>
            </label>
            <textarea placeholder="Type Your Message" className="textarea bg-slate-100 textarea-bordered border-emerald-700 textarea-lg w-full" ></textarea>
          </div>
          <div className="text-center mt-8">
            <button className="btn btn-wide text-white bg-emerald-700">Send Message</button>
          </div>
      </div>
    </div>
  );
};

export default ContactUs;
