import React from 'react'

// photos
import nepal from '../../public/img/nepal.webp'
import mexico from '../../public/img/mexico.webp'
import zambia from '../../public/img/zambia.webp'
import navajo from '../../public/img/navajo.webp'
import Image from 'next/image'

const Wherewework = () => {
  return (
    <>
      <section className='margin'>
        <div className='container'>
          <h1 className='ff-lora fw-bold mb-4 text-center'>Where we Work ?</h1>
          <ul className='nav nav-pills mb-5 d-flex justify-content-center' id='pills-tab' role='tablist'>
            <li className='nav-item mr-5' role='presentation'>
              {/* data-bs-toggle should be same as id in tab-content */}
              <button
                className='nav-link active'
                id=''
                data-bs-toggle='pill'
                data-bs-target='#nepal'
                type='button'
                role='tab'
              >
                Nepal
              </button>
            </li>
            
            <li className='nav-item mr-5' role='presentation'>
              <button
                className='nav-link'
                id='dinneri'
                data-bs-toggle='pill'
                data-bs-target='#mexico'
                type='button'
                role='tab'
              >
                Mexico
              </button>
            </li>
            
            <li className='nav-item mr-5' role='presentation'>
              <button
                className='nav-link'
                id=''
                data-bs-toggle='pill'
                data-bs-target='#zambia'
                type='button'
                role='tab'
              >
                Zambia
              </button>
            </li>
            
            <li className='nav-item mr-5' role='presentation'>
              <button
                className='nav-link'
                id='pills-contact-tab'
                data-bs-toggle='pill'
                data-bs-target='#special'
                type='button'
                role='tab'
              >
                Navajo Nation
              </button>
            </li>
          </ul>
          
          {/* tab contents */}
          <div className='tab-content' id='pills-tabContent'>
            <div className='tab-pane fade show active' id='nepal' role='tabpanel'>
              <div className="row">
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <p>Women To Be has distributed kits and sex education to 1,600 girls and women in 2015 and 2016. Christine actually went to the refugee camp her friend lived in to distribute kits to the girls and women her friend had to leave behind.  A needs assessment shows that girls drop out of school at the start of puberty and the local population, particularly women, suffers from unemployment. In 2017, 281 women and girls who received kits a year earlier were surveyed, 279 reported that the kits allowed them to perform their duties and stay in school, that they wanted a replacement kit in 2019 when their current kit is no longer effective, and that they would like more kits to give to friends and family who did not initially receive them.</p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <div className='card rounded-0 border-0 next_img_wrapper'>
                    <Image className='img-fluid card-img rounded-0' src={nepal} height={150} width={600} alt='Nepal' />
                  </div>
                </div>
              </div>
            </div>
            
            <div className='tab-pane fade' id='mexico' role='tabpanel'>
              <div className="row">
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <p>Women To Be distributed 500 kits in remote areas of Chihuahua in May 2019 to bring the program to Tarahumara indigenous women. We returned in October 2019 to research resources and strengthen relationships with the State of Chihuahua Health and Human Services Office. Following our mission and with their partnership, we intend to establish a sewing enterprise. Through grants and donations, we expect our enterprise to be profitable and sustainable. This has currently been delayed due to COVID-19. However, in early 2021, we distributed 500 kits to Juarez.</p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <div className='card rounded-0 border-0'>
                    <Image className='img-fluid card-img rounded-0' src={mexico} height={150} width={600} alt='Nepal' />
                  </div>
                </div>
              </div>
            </div>
            
            <div className='tab-pane fade' id='zambia' role='tabpanel'>
              <div className="row">
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <p>Women To Be has distributed kits to 1000 girls and women in 2018 and 2019. A team of researchers from the University of New Mexico visited Zambia during the 2019 trip to collect, and later analyze, data regarding the effectiveness of the kits and health classes – and to measure the degree to which women and girls want our products and services. The results confirm our mission and all our beliefs with great certainty – the kits work and are wanted!</p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <div className='card rounded-0 border-0'>
                    <Image className='img-fluid card-img rounded-0' src={zambia} height={150} width={600} alt='Nepal' />
                  </div>
                </div>
              </div>
            </div>
            
            <div className='tab-pane fade' id='special' role='tabpanel'>
              <div className="row">
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <p>U.S. Senators Jeff Udall and Martin Heinrich, Governor Lujan Grisham, and Albuquerque Mayor Tim Keller have written in endorsement of WTB. We know that there are girls and women in New Mexico (NM) who cannot afford or do not have access to disposable menstrual products every month. Some of these women are survivors of domestic violence or those recently released from detention.
                  <br /><br />
                  From May 2020 to January, 2021 during the worst of COVID-19, Women To Be distributed 900 kits to NM Navajo women, many of whom live without running water and electricity.  We also organized an all-volunteer Albuquerque community-driven project to deliver 35 tons of food, water, and cleaners to Navajo families continually on the edge of running out of food. The Council of the Navajo Nation recognized Women To Be for their aid and friendship.</p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <div className='card rounded-0 border-0'>
                    <Image className='img-fluid card-img rounded-0' src={navajo} height={150} width={600} alt='Nepal' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Wherewework
