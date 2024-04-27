import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
const Banner = () => {
  return (
    <div className="carousel w-full rounded-3xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={banner1}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle bg-emerald-500 text-white font-bold">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-emerald-500 text-white font-bold">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={banner2}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-emerald-500 text-white font-bold">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-emerald-500 text-white font-bold">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={banner3}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-emerald-500 text-white font-bold">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-emerald-500 text-white font-bold">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;