import { MouseEventHandler, ReactNode, RefObject } from 'react'

export enum TabPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export type FileProps = {
  children: ReactNode
  isTabClickable: boolean
  onTabClick: MouseEventHandler<HTMLButtonElement>
  ref: RefObject<HTMLDivElement | null>
  tabPosition: TabPosition
  title: string
}
