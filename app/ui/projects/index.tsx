import { FunctionComponent } from 'react'

import File from '@/app/ui/file'
import { TabPosition } from '@/app/ui/file/types'
import { ProjectsProps } from '@/app/ui/projects/types'

import styles from './styles.module.css'

const Projects: FunctionComponent<ProjectsProps> = (props) => {
  return (
    <File {...props} tabPosition={TabPosition.RIGHT} title="Projects">
      <div className={styles.projects}>
        Coming soon...
      </div>
    </File>
  )
}

export default Projects
