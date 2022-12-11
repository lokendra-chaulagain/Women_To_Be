import React from 'react'
import { review } from '../../data/Review'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper'

import styles from '../../../styles/modules/Endoursment.module.scss'
import Image from 'next/image'

import avatar from '../../../public/img/avatar.png'

const Review = () => {
  return (
    <>
      <section className='margin'>
        <h1 className='ff-lora fw-bold text-center'>What Ladies Says&apos;s</h1>
        <div className='container mt-5'>
          <div className={styles.end_wrapper}>
            <div className='card-group'>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                style={{ padding: '30px 10px'}}
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
                {review.map((item, index) => (
                  <>
                    <div key={index}>
                      <SwiperSlide>
                        <div className={`${styles.end_card} card`}>
                          <div className='card-body d-flex flex-column justify-content-between'>
                            <div>
                              <p>{item.review}</p>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <div>
                                <Image src={avatar} height={40} width={40} style={{ objectFit: 'cover' }} alt='' />
                              </div>
                              <p className='text-muted'>{item.by}</p>
                            </div>
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

export default Review
