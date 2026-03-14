import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

import styles from './styles.module.css'

export default function File() {
  gsap.registerPlugin(useGSAP)

  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
  }, { scope: containerRef })

  return (
    <div className={styles.green} ref={containerRef}>
      <h2>EXPIRENCE</h2>
    </div>
  )
}
