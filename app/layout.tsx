import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: '발로봇 - 한국인들의 발로란트 디스코드 봇',
  description: '발로봇을 즐겨보세요!',
  icons: 'https://media.discordapp.net/attachments/1270936951893262376/1270936967793868864/val_logo.png?ex=66b583c9&is=66b43249&hm=22674582aa3662452cff8f31d678ddb79cf53eac83c300b8aa1f26518c2478d2&=&format=webp&quality=lossless&width=453&height=437',
  verification: {
    google: "4bT2sBG2vI_lOb4XB8wBdGs1FcZagZfCR3OyeFV3y6M",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
