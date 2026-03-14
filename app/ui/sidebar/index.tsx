import Image from 'next/image'

import MeImage from '../../me.jpg'
import styles from './styles.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>Tiimu Pitt</h1>
        <span>Software Engineer</span>
      </div>
      <p>I am a technically minded creative professional with a broad spectrum of skills in computing. I coded audio software at university and have been working professionally as a software engineer since with a focus on frontend.</p>
      <div className={styles.contact}>
        <strong>tiimupitt@gmail.com</strong>
        <span>Brighton, East Sussex</span>
      </div>
      <div className={styles.polaroid}>
        <Image alt="picture of me" src={MeImage} />
      </div>
    </div>
  )
}
