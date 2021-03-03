import React from 'react'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import '../../assets/scss/TableSwiper.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const TableSwiper = ({onClick,length}) => {
  const slides = Array.from({ length }).map(
    (el, index) => index + 1
  );
  
  return (
    <div className="swiper__wrap"> 
        <Swiper
          spaceBetween={8}
          slidesPerView={5}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
        >
          {slides.map((slideContent, index) => {
           return (
            <SwiperSlide 
              key={slideContent}
              onClick={()=>onClick(index + 1)} 
              virtualIndex={index} 
              className="swiper__elem"
            >
              {slideContent}
            </SwiperSlide>)
          })}
        </Swiper>
        </div>
  )
}
