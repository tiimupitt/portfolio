'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FunctionComponent, useRef, useState } from 'react'

import CurriculumVitae from '@/app/ui/curriculum-vitae'
import { TAB_MAX_ROATION, TAB_VERTICAL_OFFSET } from '@/app/ui/file-pile/constants'
import { FileTab } from '@/app/ui/file-pile/types'
import Projects from '@/app/ui/projects'

import styles from './styles.module.css'

const FilePile: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const curriculumVitaeRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeTab, setActiveTab] = useState(FileTab.CV)

  const getElements = (tab: FileTab) => {
    switch (tab) {
      case FileTab.CV:
        return { active: curriculumVitaeRef.current, inactive: projectsRef.current }
      case FileTab.PROJECTS:
        return { active: projectsRef.current, inactive: curriculumVitaeRef.current }
    }
  }

  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    gsap
      .timeline()
      .set(projectsRef.current, { scale: 1.1, y: '100vh' })
      .set(curriculumVitaeRef.current, { scale: 1.1, y: '100vh' })
      .set(containerRef.current, { opacity: 1 })
      .to(projectsRef.current, { duration: 0.5, ease: 'expo.out', rotation: -TAB_MAX_ROATION / 2, y: -TAB_VERTICAL_OFFSET })
      .to(projectsRef.current, { duration: 0.5, ease: 'expo.out', scale: 1 })
      .to(curriculumVitaeRef.current, { duration: 0.5, ease: 'expo.out', rotation: TAB_MAX_ROATION / 2, y: TAB_VERTICAL_OFFSET })
      .to(curriculumVitaeRef.current, { duration: 0.5, ease: 'expo.out', scale: 1 })
  }, { scope: containerRef })

  const handleTabClick = (tab: FileTab) => {
    setIsAnimating(true)

    const { active, inactive } = getElements(tab)

    const timeline = gsap.timeline({
      onComplete: () => {
        setActiveTab(tab)
        setIsAnimating(false)
      },
    })

    timeline
      .set(active, { scale: 1 })
      .to(active, { duration: 0.2, ease: 'expo.inOut', y: '110%' })
      .set(active, { zIndex: 1 })
      .set(inactive, { zIndex: 0 })
      .to(active, { duration: 0.2, ease: 'expo.inOut', scale: 1.1 })
      .to(inactive, { duration: 0.2, ease: 'expo.inOut', y: -TAB_VERTICAL_OFFSET })
      .to(active, { duration: 0.2, ease: 'expo.inOut', y: TAB_VERTICAL_OFFSET })
      .to(active, { duration: 0.2, ease: 'expo.inOut', rotation: gsap.utils.random(-TAB_MAX_ROATION, TAB_MAX_ROATION), scale: 1 })
  }

  const isTabClickable = (tab: FileTab) => activeTab !== tab && !isAnimating

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <Projects isTabClickable={isTabClickable(FileTab.PROJECTS)} onTabClick={() => handleTabClick(FileTab.PROJECTS)} ref={projectsRef} />
      <CurriculumVitae isTabClickable={isTabClickable(FileTab.CV)} onTabClick={() => handleTabClick(FileTab.CV)} ref={curriculumVitaeRef} />
    </div>
  )
}

export default FilePile
