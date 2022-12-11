import React from 'react'
import styles from '../../styles/modules/About.module.scss'
import { details } from '../data/detailsSource'
import Fadein from '../animations/Fadein'
import { useInView } from 'react-intersection-observer'

const Details = () => {
  const [ref, inView] = useInView()
  return (
    <>
      <section className='margin'>
        <div className={`${styles.about_details}`}>
          <div className={`${styles.details_wrapper} container`}>
            <div className={`${styles.details_card}`}>
              {details.map((item, index) => (
                <>
                  <div key={index} ref={ref}>
                    <Fadein isInView={inView}>
                      <div className={styles.detail_card}>
                        <div>{item.icon}</div>
                        <div>
                          <h5 className='ff-lora h5 fw-bold mt-3'>{item.title}</h5>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </Fadein>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Details
