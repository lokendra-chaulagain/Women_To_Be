import React, { useEffect } from 'react'
import styles from '../../styles/modules/Ourinfo.module.scss'
import { ourInfo } from '../data/ourInfoSource'
import { useInView } from 'react-intersection-observer'
import { motion as m, useAnimation } from 'framer-motion'

const Ourinfo = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  const container = {
    show: { opacity: 1, x: 0, transition: { duration: .8, ease: 'easeInOut', staggerChildren: 0.3 }},
    hidden: { opacity: 0, x: -20 },
  }

  const item = {
    show: { opacity: 1, x: 0, transition: { duration: .8, ease: 'easeInOut', staggerChildren: 0.3 }},
    hidden: { opacity: 0, x: -20 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }

    if (!inView) {
      controls.start('hidden')
    }
  })

  return (
    <>
      <section ref={ref} className='mt-5 pt-3'>
        <div className={styles.info_container}>
          <div className='container'>
            <m.div
              
              initial='hidden'
              animate={controls}
              variants={container}
              className={`${styles.info_wrapper}`}
            >
              {ourInfo.map((items, index) => (
                <>
                  <m.div
                    variants={item}
                    key={index}
                    className='d-flex flex-column align-items-center'
                  >
                    {items.icon}
                    <h4 className='h4 mb-1 text-light fw-bold mt-2'>{items.stat}</h4>
                    <p className='text-light'>{items.work}</p>
                  </m.div>
                </>
              ))}
            </m.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ourinfo
