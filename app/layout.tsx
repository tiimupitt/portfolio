import type { Metadata } from 'next'

import { Google_Sans_Flex } from 'next/font/google'

import './global.css'

const googleSansFlex = Google_Sans_Flex({
  axes: ['GRAD', 'ROND', 'wdth', 'opsz', 'slnt'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  description: 'Portfolio',
  title: 'Tiimu Pitt',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={googleSansFlex.className}
      >
        {children}
      </body>
    </html>
  )
}
