import { useEffect, useState, createContext } from 'react'
import { motion as m, useAnimation } from 'framer-motion'

// interface FadeInProps {
//    children: any;
//    isInView: boolean;
// }

export const FadeIn = createContext()

export const FadeInProvider = ({ children, isInView }) => {
   const controls = useAnimation()
   const loki = 'chaulagain'

   const container = {
      show: { opacity: 1, y: 0, transition: { duration: .9, staggerChildren: 0.3 } },
      hidden: { opacity: 0, y: 30 },
   }

   const items = {
      show: { opacity: 1, y: 0, transition: { duration: 1 }},
      hidden: { opacity: 0, y: 30 }
   }

   useEffect(() => {
      if (isInView) {
         controls.start('show')
      }

      if (!isInView) {
         controls.start('hidden')
      }
   }, [controls, isInView])

   return (
      <FadeIn.Provider value={{ container, items }}>
         <m.div initial='hidden' animate={controls}>{children}</m.div>
      </FadeIn.Provider>
   )
}

