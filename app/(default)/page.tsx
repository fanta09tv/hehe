export const metadata = {
  title: '발로봇 - 한국인들의 발로란트 디스코드 봇',
  description: '발로봇을 즐겨보세요!',
  icons: 'https://media.discordapp.net/attachments/1045603394271838218/1135739430779490345/image.png',
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
