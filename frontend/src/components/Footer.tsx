import React from 'react'
import styles from '../../styles/modules/Footer.module.scss'
import { CgFacebook, CgInstagram } from 'react-icons/cg'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer_wrapper}>
        <div className="container">
          <div className={styles.footer_container}>
            <div className={styles.footer_links}>
              <h4 className="ff-lora fw-bold">About Us</h4>
              <p className={`${styles.about} fw-normal`}>Women To Be delivers reusable menstrual hygiene kits and reproductive health education to elevate the quality of life for girls and young women around the world.</p>
              <div className={styles.comp_detail}>
                <span className='fw-normal'>Koteshor, KTM</span> <br />
                <span className='fw-normal'>info.womenstobe@gmail.com</span>
              </div>
              <div className={styles.social_links}>
                <div className={styles.social}>
                  <CgFacebook size={22} />
                </div>
                <div className={styles.social}>
                  <CgInstagram size={22} />
                </div>
              </div>
            </div>
            <div className={styles.footer_right}>
              <div className={styles.footer_links}>
                <h4 className="ff-lora fw-bold">Links</h4>
                <ul className={``}>
                  <li><span>Home</span></li>
                  <li><span>About</span></li>
                  <li><span>Blog</span></li>
                  <li><span>Shop</span></li>
                </ul>
              </div>
              <div className={styles.footer_links}>
                <h4 className="ff-lora fw-bold">Subscribe</h4>
                <div className='d-flex flex-column gap-1'>
                  <input className={styles.subscribe_input} autoComplete='off' placeholder='Email' type="email" name="email" id="email" />
                  <button type='submit' className='my-Btn rounded-0'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <p className='text-center text-light'>©️ Copyright Falcon TechNepal</p>
      </footer>
    </>
  )
}

export default Footer
