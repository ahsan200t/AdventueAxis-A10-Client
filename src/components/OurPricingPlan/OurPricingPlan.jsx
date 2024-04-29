const OurPricingPlan = () => {
  return (
    <div className="font-serif">
      <div className="text-center my-14">
        <h1 className="text-4xl font-bold divider">
          Our Discount Plan
        </h1>
        <p className="mt-2 ">
          ---Explore Our Elite Service and Enjoy The Whole World---
        </p>
      </div>

      <div className="space-y-4 md:flex gap-4 justify-around mt-6 bg-gray-300 md:p-10 rounded-2xl mb-14">
        <div className="indicator shadow-2xl">
          <div className="indicator-item indicator-bottom">
          <button className="btn btn-xs text-white bg-emerald-700">Get The Discount</button>
          </div>
          <div className="card border">
            <div className="card-body">
              <h2 className="card-title"> Single Trip?</h2>
              <p>Sorry!!! No Discount Yet</p>
              <div className="divider"></div>
              <p>We Will Try Next Time</p>
            </div>
          </div>
        </div>
        <div className="indicator shadow-2xl">
          <div className="indicator-item indicator-bottom">
          <button className="btn btn-xs text-white bg-emerald-700">Get The Discount</button>
          </div>
          <div className="card border">
            <div className="card-body">
              <h2 className="card-title"> Couple Trip?</h2>
              <p>20% Discount Now</p>
              <div className="divider"></div>
              <p>Use Coupon: <b>Couple20</b></p>
            </div>
          </div>
        </div>
        <div className="indicator shadow-2xl">
          <div className="indicator-item indicator-bottom">
            <button className="btn btn-xs text-white bg-emerald-700">Get The Discount</button>
          </div>
          <div className="card border">
            <div className="card-body">
              <h2 className="card-title"> Family Trip?</h2>
              <p>35% Discount</p>
              <div className="divider"></div>
              <p>Use Coupon: <b>HappyFamily35</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPricingPlan;
