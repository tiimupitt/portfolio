import { FunctionComponent, ReactNode } from 'react'

import { HeadingProps, HeadingSize } from '@/app/ui/heading/types'

import styles from './styles.module.css'

const Heading: FunctionComponent<HeadingProps> = ({ children, size }) => {
  const characters = children.split('')

  const wrapHeading = (children: ReactNode) => {
    switch (size) {
      case HeadingSize.H1:
        return <h1 className={styles.h1}>{children}</h1>
      case HeadingSize.H2:
        return <h2 className={styles.h2}>{children}</h2>
      case HeadingSize.H3:
        return <h3 className={styles.h3}>{children}</h3>
      case HeadingSize.H4:
        return <h4 className={styles.h4}>{children}</h4>
      case HeadingSize.H5:
        return <h5 className={styles.h5}>{children}</h5>
    }
  }

  return wrapHeading(characters.map((character, index) => <span key={index}>{character}</span>))
}

export default Heading
