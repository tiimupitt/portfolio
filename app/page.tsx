import Image from 'next/image'

import WoodImage from '@/app/image/wood.jpg'
import styles from '@/app/styles.module.css'
import FilePile from '@/app/ui/file-pile'
import Sidebar from '@/app/ui/sidebar'

import LightSwitch from './ui/light-switch'

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <Sidebar />
        <div className={styles.wrapper}>
          <Image alt="wood background" className={styles.wood} src={WoodImage} />
          <FilePile />
          <LightSwitch />
        </div>
      </main>
    </div>
  )
}
