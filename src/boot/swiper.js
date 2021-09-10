import { boot } from "quasar/wrappers";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Autoplay, EffectCube } from "swiper";

SwiperCore.use([Pagination, Autoplay, EffectCube]);

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  // something to do
  app.component("swiper", Swiper);
  app.component("swiper-slide", SwiperSlide);
});
