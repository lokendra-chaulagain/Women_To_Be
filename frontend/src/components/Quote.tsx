import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Fadein from '../animations/Fadein'

const Quote = () => {
  const [ref, inView] = useInView()
  return (
    <>
      <section className='margin'>
        <div className='container'>
          <div ref={ref} className=''>
            <Fadein isInView={inView}>
              <div className="quote-container">
                <div className='line' />
                <div className='quote'>
                  <p>
                    We remain unafraid of blood when we shed it for power When we shed it for birth, we run We flee her miracle, yet we find comfort in man-made mortality when it would cost us nothing but education and compassion to keep all her dignity inside us.
                  </p>
                  <span className='text-muted text-center'>
                    <span className=' fw-bold'>Hakeem Bellamy</span>
                    <br /> former Albuquerque Poet Laureate, from Rites of Passage
                  </span>
                </div>
                <div className='line' />
              </div>
            </Fadein>
          </div>
        </div>
      </section>
    </>
  )
}

export default Quote
