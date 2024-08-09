import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
          <picture id="footer-logo" >
            <img src="https://media.discordapp.net/attachments/1151062950539427861/1271072893249257522/image.png?ex=66b60261&is=66b4b0e1&hm=387cbcdb9dd7b6eece3008399c295b94926421ad6a9244006885e169e284ae4f&=&format=webp&quality=lossless&width=196&height=77" alt="Logo"></img>
          </picture>
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero"/>
    </Link>
  )
}
