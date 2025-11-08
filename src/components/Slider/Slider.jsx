import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/modules';
import Slide1 from './Slide1';
import Container from '../Container/Container';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

const Slider = () => {
  return (
    <>
      <Container>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide1></Slide1>
          </SwiperSlide>
          <SwiperSlide>
            <Slide2></Slide2>
          </SwiperSlide>
          <SwiperSlide>
            <Slide3></Slide3>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default Slider;
