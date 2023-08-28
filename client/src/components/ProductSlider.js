import React from 'react';
// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
 // import swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 // impor required modules
import { Pagination, Navigation} from 'swiper';
// import components
import Product from '../components/Product';


const ProductSlider = ({ data }) => {
  return (
    <Swiper>
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product}/>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default ProductSlider;
