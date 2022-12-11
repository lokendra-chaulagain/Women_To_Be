import React from 'react'
// Swiper Slide
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper'

import styles from '../../../styles/modules/Shop.module.scss'

const Shopbanner = () => {
  return (
    <>
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        loop={true}
        className={styles.hero}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <section className={styles.shop_hero}>
            <div className={styles.shop}></div>
          </section>
        </SwiperSlide>
        {/* <SwiperSlide>2</SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default Shopbanner
