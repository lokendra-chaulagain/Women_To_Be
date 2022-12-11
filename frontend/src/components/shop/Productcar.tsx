import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper'
import image from '../../../public/img/pad.png'

import styles from '../../styles/modules/Endoursment.module.scss'
import Image from 'next/image'
const Productcar = () => {
  const images = [image, image, image]
  return (
    <>
      <section>
        <Swiper
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Pagination]}
          autoplay={{ delay: 3000 }}
        >
          {images.map((image, index) => (
            <>
              <div key={index}>
                <SwiperSlide>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Image
                      src={image}
                      alt=''
                      height={280}
                      width={200}
                    />
                  </div>
                </SwiperSlide>
              </div>
            </>
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default Productcar
