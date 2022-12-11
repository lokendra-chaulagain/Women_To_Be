import React from 'react'
import { CgFacebook, CgInstagram } from 'react-icons/cg'

const Contactform = () => {
  return (
    <>
      <section className='mt-5 pt-3'>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
            <div className="cols">
              <h1 className="ff-lora fw-bold">We&#39;d love to here from you!</h1>
              <div>
                <div className="address mt-5">
                  <h5 className='fw-bold'>Address</h5>
                  <p>Koteshor, KTM</p>
                </div>
                <div className="email mt-5">
                  <h5 className='fw-bold'>Email</h5>
                  <p>womens2be@gmail.com</p>
                </div>
                <div className="phone mt-5">
                  <h5 className='fw-bold'>Phone</h5>
                  <p>+977 986-3692780</p>
                </div>
                <div className="socials mt-5">
                  <h5 className='fw-bold'>Socials</h5>
                  <div className="d-flex gap-3">
                    <div className="social-icon">
                      <CgFacebook className='icon' size={25} />
                    </div>
                    <div className="social-icon">
                      <CgInstagram className='icon' size={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cols mt-5 mt-md-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371.27089323276124!2d85.33815082980934!3d27.71284287672743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199fabf3bd39%3A0x9b57fd7c6dd6761e!2sFalcon%20Tech%20Nepal!5e0!3m2!1sen!2snp!4v1668332226723!5m2!1sen!2snp" height="350" style={{ border: '0', width: '100%' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <div className='container mt-5 pt-4'>
          <h1 className="ff-lora fw-bold">Say Something</h1>
          <form action="">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 mt-5">
              <div className="col">
                <label className='mb-3' htmlFor="name">Your Name <span>*</span></label>
                <div>
                  <input placeholder='Sagar Khadka' type="text" name="name" id="name" />
                </div>
              </div>
              <div className="col mt-3 mt-md-0">
                <label className='mb-3' htmlFor="email">Your Email <span>*</span></label>
                <div>
                  <input placeholder='example@gmail.com' type="email" name="email" id="email" />
                </div>
              </div>
            </div>
            
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 mt-3">
              <div className="col">
                <label className='mb-3' htmlFor="subject">Your Subject <span>*</span></label>
                <div>
                  <input placeholder='Subject' type="text" name="subject" id="subject" />
                </div>
              </div>
              <div className="col mt-3 mt-md-0">
                <label className='mb-3' htmlFor="phone">Your Phone <span>*</span></label>
                <div>
                  <input placeholder='9843692780' type="tel" name="phone" id="phone" />
                </div>
              </div>
            </div>
            <label className='mb-3 mt-3' htmlFor="message">Your Message <span>*</span></label>
            <div>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type='submit' className="my-Btn mt-2">Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contactform
