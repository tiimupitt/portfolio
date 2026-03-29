import Image from 'next/image'
import { FunctionComponent } from 'react'

import PaperImage from '@/app/image/paper.jpg'
import PaperclipImage from '@/app/image/paperclip.png'
import PdfIcon from '@/app/svg/pdf'
import { CurriculumVitaeProps } from '@/app/ui/curriculum-vitae/types'
import ExpirenceItem from '@/app/ui/experience-item'
import File from '@/app/ui/file'
import { TabPosition } from '@/app/ui/file/types'
import Heading from '@/app/ui/heading'
import { HeadingSize } from '@/app/ui/heading/types'

import styles from './styles.module.css'

const CurriculumVitae: FunctionComponent<CurriculumVitaeProps> = ({ ref, ...fileProps }) => {
  return (
    <div className={styles.wrapper} ref={ref}>
      <File {...fileProps} tabPosition={TabPosition.LEFT} title="CV">
        <ul className={styles.container}>
          <Heading size={HeadingSize.H3}>About</Heading>
          <p>I am a technically minded creative professional with a broad spectrum of skills in computing. I coded audio software at university and have been working professionally as a software engineer since with a focus on frontend.</p>
          <Heading size={HeadingSize.H3}>Experience</Heading>
          <ExpirenceItem
            date="October 2022 — Present"
            description={{
              points: [
                'Had a hand in the delivery of large-scale projects on key pages of their customer facing site.',
                'Built and maintained internal tools to improve developer experience alongside sprint work.',
                'Developed processes for dealing with bugs and production issues.',
                'Facilitated the improvement of their ticket refinement processes.',
                'Mentored junior level engineers to be capable of taking on roadmap tickets with confidence.',
              ],
            }}
            pills={['Javascript', 'Typescript', 'NextJS']}
            subtitle="Software Engineer"
            title="MPB"
          />
          <ExpirenceItem
            date="January 2022 — October 2022"
            description={{
              points: [
                'User app (iOS & Android)- rewards platform with financial tracking.',
                'Operator dashboard - marketing, analytics and app management',
              ],
              title: 'Led the development and maintenance of the front end of their website and software products including:',
            }}
            pills={['Javascript', 'Typescript', 'Vue', 'React Native']}
            subtitle="Frontend Developer"
            title="Boogi"
          />
          <Heading size={HeadingSize.H3}>Education</Heading>
          <ExpirenceItem
            date="September 2020 — January 2021"
            description={{
              points: [
                'HTML, CSS, JavaScript, bootstrap.',
                'Node, express, MongoDB.',
              ],
              title: 'Full stack web development course, covering:',
            }}
            subtitle="Online"
            title="Web Development Bootcamp"
          />
          <ExpirenceItem
            date="September 2017 — October 2019"
            description={{
              points: [
                'Advanced signal processing techniques.',
                'Real time audio plugin development.',
              ],
              title: 'Creative Music Technology, covering:',
            }}
            subtitle="Degree"
            title="Bath Spa University"
          />
          <Heading size={HeadingSize.H3}>Awards</Heading>
          <ExpirenceItem
            date="1st year"
            description={{
              title: 'Attributed to exemplary performance in programming modules.',
            }}
            subtitle="Bath Spa University"
            title="Student of the year"
          />
          <ExpirenceItem
            date="2nd year"
            description={{
              title: 'Achieved the highest grade ever given out in the history of the course for a programming module.',
            }}
            subtitle="Bath Spa University"
            title="Grade record"
          />
          <Heading size={HeadingSize.H3}>Volunteering</Heading>
          <ExpirenceItem
            subtitle="BMEYPP"
            title="Young people's mentor"
          />
        </ul>
      </File>
      <div className={styles.note}>
        <a
          className={styles.paper}
          href="/files/curriculum-vitae.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image alt="" src={PaperImage} />
          <PdfIcon />
          <span>Download PDF</span>
        </a>
        <Image alt="paperclip" className={styles.paperclip} src={PaperclipImage} />
      </div>
    </div>
  )
}

export default CurriculumVitae
