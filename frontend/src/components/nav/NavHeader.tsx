import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import styles from '../../../styles/modules/Nav.module.scss'

import { TbMenu } from 'react-icons/tb'
import { IoCloseSharp } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Strip from './Strip'

const NavHeader = () => {
  let menuRef = React.useRef() as React.MutableRefObject<HTMLUListElement>
  const [clicked, setClicked] = useState(false)
  const [color, setColor] = useState('#fff')
  const router = useRouter()
  const id = router.query.id

  useEffect(() => {
    console.log(router.route)

    if (router.route === '/blog/[id]' || router.route === '/shop/[id]' || router.route === '/donate') {
      setColor('#fff')
    } else {
      setColor('transparent')
    }
  }, [router.route])

  if (typeof window != 'undefined') {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(`#fff`)
      } else {
        // setColor('transparent')
        router.route !== '/blog/[id]' && setColor('transparent')
        router.route !== '/shop/[id]' && setColor('transparent')

        router.route === '/blog/[id]' && setColor('#fff')
        router.route === '/shop/[id]' && setColor('#fff')
        router.route === '/donate' && setColor('#fff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }

  const handleClick = () => {
    setClicked(!clicked)
    menuRef.current.classList.toggle('show')
  }

  return (
    <header
      className={styles.nav_header}
      style={{ background: `${color}` }}
    >
      <Strip />
      <nav className={styles.nav}>
        <Link href='/'>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt=''
              height={40}
              width={180}
            />
          </div>
        </Link>
        <ul className={styles.nav_links}>
          <li className={styles.nav_items}>
            <Link className='link' href='/'>
              <span className={`${styles.item} link`}>Home</span>
            </Link>
          </li>
          <li className={styles.nav_items}>
            <Link href='/about'>
              {/* <span className='link'> */}
                <span className={`${styles.item} link`}>About</span>
              {/* </span> */}
            </Link>
          </li>
          <li className={styles.nav_items}>
            <Link href='/contact'>
              <span className={`${styles.item} link`}>Contact</span>
            </Link>
          </li>
          <li className={styles.nav_items}>
            <Link href='/blog'>
              <span className={`${styles.item} link`}>Blog</span>
            </Link>
          </li>
          <li className={styles.nav_items}>
            <Link href='/shop'>
              <span className={`${styles.item} link`}>Shop</span>
            </Link>
          </li>
          <li className={styles.nav_items}>
            <Link href='/donate'>
              <button
                type='button'
                className={`${styles.nav_btn} my-Btn`}
              >
                Donate
              </button>
            </Link>
          </li>
        </ul>
        <button
          type='button'
          className={styles.nav_ham}
          onClick={handleClick}
        >
          {!clicked ? (
            <TbMenu
              size={34}
              color={'#27b746'}
            />
          ) : (
            <IoCloseSharp
              size={34}
              color={'#27b746'}
            />
          )}
        </button>
        <ul
          ref={menuRef}
          className={`${styles.responsive_nav_links}`}
        >
          <li className={styles.responsive_nav_items}>
            <Link href='/'>
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.responsive_nav_items}>
            <Link href='/about'>
              <span>About</span>
            </Link>
          </li>
          <li className={styles.responsive_nav_items}>
            <Link href='/contact'>
              <span>Contact</span>
            </Link>
          </li>
          <li className={styles.responsive_nav_items}>
            <Link href='/blog'>
              <span>Blog</span>
            </Link>
          </li>
          <li className={styles.responsive_nav_items}>
            <Link href='/shop'>
              <span>Shop</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* FOR MOBILE VIEW */}
    </header>
  )
}

export default NavHeader
