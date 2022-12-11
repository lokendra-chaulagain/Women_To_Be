import React from 'react'
import { endoursment } from '../data/endoursmentsSource'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper'

import styles from '../../styles/modules/Endoursment.module.scss'

const Endoursment = () => {
  return (
    <>
      <section className='margin'>
        <h1 className='ff-lora fw-bold text-center'>Endoursments</h1>
        <div className='container mt-5'>
          <div className={styles.end_wrapper}>
            <div className='card-group'>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                style={{ padding: '5px' }}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                  },

                  500: {
                    slidesPerView: 1,
                  },

                  760: {
                    slidesPerView: 2,
                  },

                  1000: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation]}
                className='mySwiper'
              >
                {endoursment.map((item, index) => (
                  <>
                    <div key={index}>
                      <SwiperSlide>
                        <div className={`${styles.end_card} card`}>
                          <div className='card-body d-flex flex-column justify-content-between'>
                            <div>
                              {/* <h3 className='ff-lora fw-bold h3'>{item.heading}</h3> */}
                              <p>{item.details}</p>
                            </div>
                            <p className='text-muted'>{item.credit}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Endoursment
