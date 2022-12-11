import { useEffect } from 'react'
import { motion as m, useAnimation } from 'framer-motion'

interface FadeInProps {
  children: any
  isInView: boolean
}

export default function Fadein({ children, isInView }: FadeInProps) {
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          delayChildren: 0.5,
          ease: 'easeInOut'
        },
      })
    }

    if (!isInView) {
      controls.start({
        opacity: 0,
      })
    }
  }, [controls, isInView])

  return <m.div animate={controls}>{children}</m.div>
}
