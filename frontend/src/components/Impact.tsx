import Image from 'next/image'
import React from 'react'
import styles from '../../styles/modules/About.module.scss'
import report from '../../public/img/report.webp'
import { useInView } from 'react-intersection-observer'
import Fadein from '../animations/Fadein'
const Impact = () => {
  return (
    <>
      <section className="margin">
        <div className={`${styles.impact_wrapper} container`}>
          <div className={`${styles.impact_titles} mb-5`}>
            <h2 className="ff-lora fw-bold text-center">Our Impact</h2>
            <p className="fw-normal text-center w-75">Women To Be liberates girls around the world into opportunity, freedom, and dignity.</p>
          </div>
          <div className="row">
            <div className="col-md-7">
              <p>Women To Be is a relentless source of advocacy for women and girls.  We have distributed over 10,000 ‘kits’ of reusable sanitary pads to girls in Nepal, Zambia, Mexico, and the Navajo Nation.  Each kit lasts three years, accounting for 30,000 years of possibility, education, and dignity for girls and women.  Our sewing center in Dhulikhel, Nepal created 22 new jobs for 22 in-need women who sew our kits for a fair wage, child care arrangements, and a free meal. 
              <br /><br />
              Our group of committed international partners is intent to find bigger and better ways to serve the menstrual and reproductive health needs of girls and boys and the communities in which they live. As we do this, our own lives are impacted and we find meaningful relationships with those we serve and those with whom we serve. We consider ourselves fortunate to do this work.</p>
            </div>
            <div className="col-md-5">
              <div className='d-flex h-100 justify-content-center align-items-center flex-column gap-3'>
                <div>
                  <div className={styles.thumbnail}>
                    <Image src={report} height={280} width={230} alt='' style={{ objectFit: 'cover' }} />
                  </div>
                  <p className='mt-3 text-center'>Annaual Report - 2022</p>
                </div>
                <div>
                  <button type='submit' className="my-Btn">Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Impact
