import React from 'react'
import styles from '../../styles/modules/About.module.scss'

const Video = () => {
  return (
    <>
      <section className={`${styles.about_video_section} margin`}>
        <div className={styles.about_video}>
          <h1 className={`${styles.video_title} ff-lora fw-bold text-center text-light mb-3 h2`}>Our Story</h1>
          <div>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/Mz4rWu2BsWM'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Video
