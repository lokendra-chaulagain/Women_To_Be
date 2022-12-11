import React from 'react'
import styles from '../../styles/modules/About.module.scss'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion as m, useAnimation } from 'framer-motion'

const Vision = () => {
   const controls = useAnimation()
   const [ref, inView] = useInView()

   const container = {
      show: { opacity: 1, y: 0, transition: { duration: .9, staggerChildren: 0.3 } },
      hidden: { opacity: 0, y: 30 },
   }

   const items = {
      show: { opacity: 1, y: 0, transition: { duration: 1 }},
      hidden: { opacity: 0, y: 30 }
   }
   
   useEffect(() => {
      if (inView) {
         controls.start('show')
      }

      if (!inView) {
         controls.start('hidden')
      }
   }, [controls, inView])

   return (
      <>
         <section className='margin mt-5'>
            <div className='container'>
               <m.div ref={ref} initial='hidden' animate={controls} variants={container} className={`${styles.vision_wrapper}`}>
                  <m.h1 variants={items} className={styles.vision_heading}>Our Vision</m.h1>
                  <m.p variants={items} className={styles.vision_para}>
                     My vision? A world in which all women and girls are given an opportunity to succeed. A world where the unique gifts and talents of women are appreciated, respected, and sought. I believe that when girls have what they need to succeed, they will. And then we all will. Education and dignity are key. <br />
                     <br />
                     Girls are the greatest untapped resource know to humankind and many don’t know what they are capable of. Imagine if every girl on the planet was given a chance to contribute, to express herself. The economy of the world would be stronger, health outcomes would improve, and quality of life for families and communities would be elevated, including our own. <br />
                     <br />
                  </m.p>
               </m.div>
            </div>
         </section>
      </>
   )
}

export default Vision
