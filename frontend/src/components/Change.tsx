import React, { useEffect } from 'react'
import styles from '../../styles/modules/Change.module.scss'
import { useInView } from 'react-intersection-observer'
import { motion as m, useAnimation } from 'framer-motion'

const Change = () => {
  const [ref, inView] = useInView()
  const animation = useAnimation()

  const animateVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
    hidden: {
      opacity: 0,
    },
  }

  const variationChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }

    if (!inView) {
      animation.start('hidden')
    }
  }, [animation, inView])

  return (
    <section className={`${styles.background} margin`}>
      <div
        ref={ref}
        className='container'
      >
        <m.div
          className={styles.wrapper}
          initial='hidden'
          animate={animation}
          variants={animateVariants}
        >
          <m.div
            variants={variationChildren}
            className={styles.text}
          >
            <h1>
              We Make a Difference, <br /> With your help
            </h1>
            <p>
              By providing girls with reusable sanitary pads and reproductive health education, we work to elevate the quality of their lives. <br />{' '}
              <br />
              When a girl stays in school, she learns a skill, delays marriage, and becomes an economic driver for herself and her community. She
              takes a stand against violence, has the confidence to lead, and ends the patriarchal system that has defeated her for too long.
            </p>
            <strong>- Thats Women to Be</strong>
          </m.div>
          <m.div
            variants={variationChildren}
            className={styles.video}
          >
            <iframe
              // width='510'
              // height='287'
              src='https://www.youtube.com/embed/uequTXQ7yFc'
              title='Women To Be Around the World'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}

export default Change
