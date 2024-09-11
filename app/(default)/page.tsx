export const metadata = {
  title: '발로봇 - 한국인들의 발로란트 디스코드 봇',
  description: '발로봇을 즐겨보세요!',
  icons: 'https://media.discordapp.net/attachments/1270936951893262376/1270940711906312253/image.png?ex=66e25a46&is=66e108c6&hm=e93e9f5d4a01dcbfd50b0dcb0bb6a6b7969f19b46ba14617028cb3e843a21787&=&format=webp&quality=lossless&width=687&height=355',
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
