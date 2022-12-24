import { useEffect, useRef } from 'react'
import { motion as m, animate } from 'framer-motion'

// interface Counterprops {
//   start: number
//   end: number
//   isInView: boolean
// }

export default function Counter ( { start, end, isInView } ) {
  let ref = useRef(null)
  // const controls = useAnimation()
  
  useEffect(() => {
    const num = ref.current
    if(isInView) {
      const controls = animate(start, end, {
        duration: 1,
        onUpdate(value) {
          num.textContent = value.toFixed(2)
        }
      })
    }
  })
  return <p ref={(el ) => (ref = el)} />
}