import styles from './styles.module.css'
import File from './ui/file'
import Sidebar from './ui/sidebar'

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <Sidebar />
        <div className={styles.content}>
          <File />
        </div>
      </main>
    </div>
  )
}
