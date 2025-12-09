import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <div className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3000 }}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/hero1.jpg')" }}
          >
            <div className="w-full h-full bg-black/40 flex items-center">
              <div className="text-white px-10 md:px-20">
                   <h1 className="text-4xl md:text-6xl font-bold text-primary">
                    Renal Bloom
                  </h1>
                <p className="text-lg md:text-2xl mt-4 max-w-2xl">
                  Advanced care dedicated to your kidney health.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/hero2.jpg')" }}
          >
            <div className="w-full h-full bg-black/40 flex items-center">
              <div className="text-white px-10 md:px-20">
                <h1 className="text-4xl md:text-6xl font-bold">Expert Doctors</h1>
                <p className="text-lg md:text-2xl mt-4 max-w-2xl">
                  Highly experienced nephrologists ready to serve you.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/hero3.jpg')" }}
          >
            <div className="w-full h-full bg-black/40 flex items-center">
              <div className="text-white px-10 md:px-20">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Compassionate Care
                </h1>
                <p className="text-lg md:text-2xl mt-4 max-w-2xl">
                  Because your health and comfort matter the most.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
