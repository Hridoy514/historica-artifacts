import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Fade, Slide } from "react-awesome-reveal";
import { FaEye } from "react-icons/fa";

const slides = [
  {
    img: "https://i.ibb.co/Xr0VvzZr/pexels-pixabay-532263.jpg",
    title: "Unlock Secrets of the Ancient Past 🏛️",
    desc: "Explore the stories behind world-changing artifacts and relics.",
  },
  {
    img: "https://i.ibb.co/4R0CHfdy/pexels-spencer-4356144.jpg",
    title: "Decode Ancient Technologies 🔍",
    desc: "Understand the brilliance behind human innovation through history.",
  },
  {
    img: "https://i.ibb.co/3XNWsx2/pexels-saturnus99-17814717.jpg",
    title: "Track Artifacts That Shaped Civilizations 📜",
    desc: "From scrolls to statues — explore relics from every era.",
  },
];

const Banner = () => {
  return (
    <section className="relative w-full mx-auto h-[50vh] md:h-[90vh]">
      <Swiper
        navigation={true}
        autoplay={{ delay: 4500 }}
        loop={true}
        effect="fade"
        modules={[Navigation, Autoplay, EffectFade]}
        className="w-full h-96 overflow-hidden shadow-2xl"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              {/* Background image */}
              <img
                src={slide.img}
                alt={`Slide ${idx}`}
                className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[.55] transition-all duration-1000"
              />

              {/* Overlay content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 sm:px-10 md:px-24 bg-gradient-to-r from-black/80 via-black/40 to-transparent">
                <Fade direction="down">
                  <h2 className="text-white fancy-font text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl max-w-3xl">
                    {slide.title}
                  </h2>
                </Fade>

                <Slide direction="up">
                  <p className="text-white fancy-font mt-4 max-w-xl text-sm sm:text-base md:text-lg font-light drop-shadow">
                    {slide.desc}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 bg-amber-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                    Explore Artifacts <FaEye />
                  </button>
                </Slide>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
