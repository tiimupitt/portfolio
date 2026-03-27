import Image from 'next/image'
import { FunctionComponent } from 'react'

import CardboardImage from '@/app/image/cardboard.jpg'
import FileTabCurve from '@/app/svg/file-tab-curve'

import styles from './styles.module.css'
import { FileProps, TabPosition } from './types'

const File: FunctionComponent<FileProps> = ({ children, isTabClickable, onTabClick, ref, tabPosition, title }) => {
  return (
    <div className={styles.container} ref={ref}>
      <button className={`${styles.tab} ${isTabClickable && styles.clickable} ${{ [TabPosition.LEFT]: styles.left, [TabPosition.RIGHT]: styles.right }[tabPosition]}`} onClick={onTabClick}>
        <FileTabCurve />
        <div><span>{title}</span></div>
        <FileTabCurve />
      </button>
      <div className={`${styles.folder} ${!isTabClickable && styles.interactive}`}>
        <Image alt="" className={styles.cardboard} src={CardboardImage} />
        <div className={styles.window}>
          <div className={styles.scroller}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default File
