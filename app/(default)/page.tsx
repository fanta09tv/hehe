export const metadata = {
  title: '발로봇 - 한국인들의 발로란트 디스코드 봇',
  description: '발로봇을 즐겨보세요!',
  icons: 'https://media.discordapp.net/attachments/1270936951893262376/1270936967793868864/val_logo.png?ex=66b583c9&is=66b43249&hm=22674582aa3662452cff8f31d678ddb79cf53eac83c300b8aa1f26518c2478d2&=&format=webp&quality=lossless&width=453&height=437',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
    </>
  )
}
