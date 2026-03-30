'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { FunctionComponent, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import LightSwitchBeadsImage from '@/app/image/light-switch-beads.png'
import LightSwitchHandleImage from '@/app/image/light-switch-handle.png'

import styles from './styles.module.css'

const LightSwitch: FunctionComponent = () => {
  gsap.registerPlugin(useGSAP)
  const blackoutRef = useRef<HTMLDivElement>(null)
  const switchRef = useRef<HTMLDivElement>(null)
  const [isLightOn, setIsLightOn] = useState(true)

  useGSAP(() => {
    gsap.set(blackoutRef.current, { background: 'radial-gradient(circle at center, transparent, transparent 15rem, transparent 20rem, transparent 25rem)', duration: 0.3, ease: 'expo.out', opacity: 0 })
  }, { scope: blackoutRef })

  const handleMouseMove = (event: globalThis.MouseEvent) => {
    const { pageX, pageY } = event

    gsap.to(blackoutRef.current, { duration: 1, ease: 'expo.out', left: pageX, top: pageY })
  }

  const handleToggleLightSwitch = () => {
    gsap
      .timeline()
      .to(switchRef.current, { duration: 0.2, ease: 'expo.inOut', onComplete: () => setIsLightOn(!isLightOn), y: '10rem' })
      .to(switchRef.current, { duration: 1, ease: 'elastic.out', y: 0 })

    if (isLightOn) {
      gsap
        .timeline()
        .to(blackoutRef.current, { background: 'radial-gradient(circle at center, #16100A, #16100A 15rem, #16100A 20rem, #16100A 25rem)', delay: 0.2, duration: 0.3, ease: 'expo.out', opacity: 1 })
        .to(blackoutRef.current, { background: 'radial-gradient(circle at center, transparent, transparent 15rem, #f7af66a4 20rem, #16100A 25rem)', delay: 0.2, duration: 1.2, ease: 'elastic.inOut' })
    }
    else {
      gsap.to(blackoutRef.current, { background: 'radial-gradient(circle at center, transparent, transparent 15rem, transparent 20rem, transparent 25rem)', delay: 0.2, duration: 0.3, ease: 'expo.out', opacity: 0 })
    }
  }

  const handleLightSwitchMouseEnter = () => {
    gsap.to(switchRef.current, { duration: 0.2, ease: 'expo.inOut', y: '1rem' })
  }

  const handleLightSwitchMouseLeave = () => {
    gsap.to(switchRef.current, { duration: 0.2, ease: 'expo.inOut', y: 0 })
  }

  window.addEventListener('mousemove', handleMouseMove)

  return (
    <>
      <div className={isLightOn ? styles['wrapper-light'] : styles['wrapper-dark']} ref={switchRef}>
        <div className={styles.beads}>
          <Image alt="" src={LightSwitchBeadsImage} />
          <Image alt="" src={LightSwitchBeadsImage} />
          <Image alt="" src={LightSwitchBeadsImage} />
          <Image alt="" src={LightSwitchBeadsImage} />
        </div>
        <button className={styles.handle} onClick={handleToggleLightSwitch} onMouseEnter={handleLightSwitchMouseEnter} onMouseLeave={handleLightSwitchMouseLeave}>
          <Image alt="" src={LightSwitchHandleImage} />
        </button>
      </div>
      {createPortal(
        <div className={styles.blackout} ref={blackoutRef} />,
        document.body,
      )}
    </>
  )
}

export default LightSwitch
