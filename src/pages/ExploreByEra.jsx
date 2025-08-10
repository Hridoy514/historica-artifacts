import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const eras = [
  {
    era: "Ancient",
    range: "Before 500 AD",
    image:
      "https://i.ibb.co/mMBy14d/pericles-funeral-oration-on-old-260nw-1598220667.jpg",
  },
  {
    era: "Medieval",
    range: "500–1500",
    image:
      "https://i.ibb.co/x8w42xsT/images-q-tbn-ANd9-Gc-S1-Pi-EVxn-JPp0-X5gm-ARy-A5vb-Py1-Ncaxpat3048vp-SV2-Z-qqzlm56yxo-R8y-RHRW6n-DC8.jpg",
  },
  {
    era: "Modern",
    range: "1500–Present",
    image: "https://i.ibb.co/7Jj9D6Qt/1-L0-R1db8hs25r3-O3m-SEdhvg-2x.jpg",
  },
];

const ExploreByEra = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white via-neutral-100 to-white dark:from-[#0e0e0e] dark:via-[#1a1a1a] dark:to-[#0e0e0e] transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-amber-700 dark:text-amber-400 mb-4 tracking-tight">
          🌍 Explore by Historical Era
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Journey through time and discover artifacts from every age.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {eras.map(({ era, range, image }) => (
            <SwiperSlide key={era}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800">
                <img
                  src={image}
                  alt={era}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition duration-300" />
                <div className="absolute bottom-5 left-5 text-left z-10">
                  <h3 className="text-2xl font-semibold text-white">{era}</h3>
                  <p className="text-sm text-gray-300">{range}</p>
                  <Link
                    to={`/all-artifacts?era=${era}`}
                    className="inline-block mt-3 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
                  >
                    Explore {era}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExploreByEra;
