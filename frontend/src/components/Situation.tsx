import React, { useEffect, useContext } from 'react'
import styles from '../../styles/modules/Situation.module.scss'
import { useInView } from 'react-intersection-observer'
import Fadein from '../animations/Fadein'

const Situation = () => {
   // const {container, items} =useContext(FadeIn)

   const [ref, inView] = useInView()

   return (
      <section className='margin'>
         <div className="container">
            <div ref={ref}>
               <Fadein isInView={inView}>
                  <div className={`${styles.wrapper}`}>
                     <h1 className={styles.heading}>Here&apos;s the situation</h1>
                     <p className={styles.para}>
                        Girls and women around the world often resort to rags and leaves to manage their monthly flow. To avoid embarrassment, they skip school, drop out, become child brides, and have successive unintended pregnancies. <br /> <br />
                        Without knowledge of how their body works, they are unprepared for their periods, sexual intimacy, and pregnancy. This lack of information causes fear and lowered self-confidence.
                     </p>
                  </div>
               </Fadein>
            </div>
         </div>
      </section>
   )
}

export default Situation
