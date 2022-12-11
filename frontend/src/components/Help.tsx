import React, { useEffect } from 'react'
import Image from 'next/image'
import { help } from '../data/helpSource'
import styles from '../../styles/modules/Help.module.scss'
import { useInView } from 'react-intersection-observer'
import { motion as m, useAnimation } from 'framer-motion'

const Help = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
        ease: 'anticipate',
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  }

  const items = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 10 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }

    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <section className='margin'>
      <div className='container'>
        <div className='text-center'>
          <h1 className='ff-lora fw-bold mb-3'>How We Help</h1>
          <p className='text-center w-75 m-auto'>
            We support and educate the reproductive health of girls and women in Nepal, Mexico, Zambia, and the Navajo Nation of New Mexico.
          </p>
          <div ref={ref}>
            <m.div
              initial='hidden'
              animate={controls}
              variants={variants}
              className={`${styles.help_wrapper} pt-4`}
            >
              {help.map((help, index) => (
                <>
                  <m.div
                    variants={items}
                    key={index}
                    className={`${styles.help_card} card mb-5 border-0 overflow-hidden hover`}
                  >
                    <div className={`'card-img next_img_wrapper`}>
                      <Image
                        src={help.thumbnail}
                        alt=''
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className='card-body'>
                      <h3 className='text-start ff-lora fw-bold h4'>{help.title}</h3>
                      <p className='m-0 text-start fw-normal'>{help.desc}</p>
                    </div>
                  </m.div>
                </>
              ))}
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Help
