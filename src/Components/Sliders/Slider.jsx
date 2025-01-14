const Slider = () => {
  return (
    <div className="carousel w-full font-openSans " >
      <div id="slide1" className="carousel-item relative w-full rounded-lg">
        <div className="">
          <img src="https://i.ibb.co/qyzKX1N/slider-1.jpg" className="w-full relative rounded-lg" />
          <div className="absolute top-10 left-1/4 md:top-20 md:left-20 lg:top-40 lg:left-32 space-y-2 text-white"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500" >
            <h2 className="text-2xl md:text-5xl "> Together</h2>
            <p className="text-4xl md:text-8xl">We can heal</p>
            <h1 className="text-4xl md:text-8xl font-bold">The Earth</h1>
          </div>

        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle" >❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        
        <div>
          <img src="https://i.ibb.co/ZHsWzyD/slider-2.jpg" className="w-full rounded-lg" />
          <div className="absolute top-10 left-1/4 md:top-20 md:left-20 lg:top-40 lg:left-32 space-y-2 text-white"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
            <p className="text-4xl md:text-7xl font-medium text-[#f3f3f8]">Help Us</p>
            <h1 className="text-3xl md:text-8xl font-bold"><span className="text-[#131314]">Save Anim</span>als</h1>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div>
          <img src="https://i.ibb.co/z62zyWT/slider-3.jpg" className="w-full rounded-lg" />
          <div className="absolute top-10 left-1/4 md:top-20 md:left-20 lg:top-40 lg:left-80 space-y-2 text-white"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
            <p className="text-3xl md:text-7xl font-medium text-[#29292b]">Make This World</p>
            <div className="bg-[#464444] opacity-70  lg:px-1 py-1 lg:py-4  text-center">
              <h1 className="  text-white md:font-bold text-2xl md:text-5xl">The better places</h1>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 "
        >
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Slider;