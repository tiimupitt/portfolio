import Image from 'next/image'

import MeImage from '@/app/image/me.jpg'
import GithubIcon from '@/app/svg/github'
import LinkedinIcon from '@/app/svg/linkedin'
import EmbossedLeather from '@/app/ui/embossed-leather'

import styles from './styles.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <EmbossedLeather />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Tiimu Pitt</h1>
            <span>Software Engineer</span>
          </div>
          <div className={styles.contact}>
            <strong>tiimupitt@gmail.com</strong>
            <span>Brighton, East Sussex</span>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/tiimupitt" target="_blank">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/tiimu-pitt/" target="_blank">
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div className={styles['polaroid-container']}>
          <div className={styles['polaroid-paper']}>
            <div className={styles['polaroid-image']}>
              <Image alt="picture of me" src={MeImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
