import React from 'react'
import styles from '../../styles/modules/Hero.module.scss'
// Swiper Slide
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper'

const Hero = () => {
  return (
    <section>
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
          <div className={styles.swiper}>
            <div className={styles.texts}>
              <small className={`${styles.small} text-center`}>Small Help Can Make Change</small>
              <h1 className={`${styles.heading} text-center`}>Elevating Lives of Girls</h1>
              <p className={`text-center ${styles.para}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit facilis sed earum modi pariatur vitae ut.</p>
              <div className='text-center'>
                <button
                  type='button'
                  className='my-Btn'
                >
                  Donate Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${(styles.swiper)}`}>
            <div className={styles.texts}>
              <small className={`${styles.small}`}>Small Help Can Make Change</small>
              <h1 className={`${styles.heading} text-center`}>Making Life Easier for Girls</h1>
              <p className={`text-center ${styles.para}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit facilis sed earum modi pariatur vitae ut. Dolor sit amet consectetur adipisicing elit. Nesciunt fugit facilis sed earum modi pariatur vitae ut</p>
              <div className='text-center'>
                <button
                  type='button'
                  className='my-Btn'
                >
                  Donate Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero
