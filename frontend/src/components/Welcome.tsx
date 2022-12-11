import Image from 'next/image'
import React from 'react'
import img from '../../public/img/IMG_9666.webp'
import styles from '../../styles/modules/About.module.scss'
import Fadein from '../animations/Fadein'
import { useInView } from 'react-intersection-observer'

const Welcome = () => {
  const [ref, inView] = useInView()

  return (
    <>
      <section className='mt-5 pt-5'>
        <div ref={ref} className="container">
          <Fadein isInView={inView}>
            <div className="row justify-content-between align-items-center">
              <div className={`${styles.welcome_img_wrapper} next_img_wrapper col-lg-5 overflow-hidden mb-4`}>
                <Image className='w-100' src={img} alt="" fill style={{ objectFit: 'cover' }}  />
              </div>
              <div className={`${styles.about_welcome} p-0 col-lg-6`}>
                <h1 className={`${styles.about_welcome_title} ff-lora fw-bold`}>We are Womens To Be</h1>
                {/* <p className={`${styles.about_welcome_quote}`}>Women To Be delivers reusable menstrual hygiene kits and reproductive health education to elevate the quality of life for girls and young women around the world.</p> */}
                <p className={`${styles.about_welcome_para}`}>Christine Glidden founded Women To Be Inc. (WTB), to become one of the fundamental components of a comprehensive health effort to provide girls and women in the world the opportunity to stay in school, get an education, participate in day-to-day activities, make informed decisions about bearing children, and become economic drivers in their communities.</p>
                {/* <span>
                  <button type='button' className='my-Btn'>Learn More</button>
                </span> */}
              </div>
            </div>
          </Fadein>
        </div>
      </section>
    </>
  )
}

export default Welcome
