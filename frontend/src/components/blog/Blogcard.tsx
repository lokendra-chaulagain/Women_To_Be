import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from '../../../styles/modules/Blog.module.scss'
import { blog } from '../../data/blogSource'
import { motion as m, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const Blogcard = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()
  const container = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        default: { ease: 'linear' },
      },
    },
    hidden: { opacity: 0, y: 10 },
  }

  const items = {
    visible: { opacity: 1, y: 0 },
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
    <>
      <section className={`${styles.blog_wrapper}`}>
        <div
          ref={ref}
          className='container'
        >
          <m.div
            initial='hidden'
            animate={controls}
            variants={container}
            className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3'
          >
            {blog.map((blog, index) => (
              <>
                <m.div
                  variants={items}
                  key={index}
                  className={styles.blog_section}
                >
                  <div className='card-group h-100'>
                    <div className={`${styles.blog_card} card rounded-0 border-0 hover mb-5 overflow-hidden`}>
                      <div className={`${styles.image_wrapper} card-img`}>
                        <Image
                          className={styles.blog_img}
                          src={blog.thumb}
                          fill
                          style={{ objectFit: 'cover' }}
                          alt=''
                        />
                      </div>
                      <div className={`${styles.card_body} card-body`}>
                        <span className='text-muted'>{blog.date}</span>
                        <h4 className={`${styles.heading} fw-bold mt-2`}>{blog.title}</h4>
                        <p className='fw-normal'>{blog.desc}</p>
                        <Link href={`/blog/${23}`}>
                          <button
                            type='button'
                            className='my-Btn'
                          >
                            Read Blog
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </m.div>
              </>
            ))}
          </m.div>
        </div>
      </section>
    </>
  )
}

export default Blogcard
