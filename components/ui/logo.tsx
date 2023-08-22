import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
          <picture id="footer-logo" >
            <img src="https://media.discordapp.net/attachments/1045603394271838218/1135739430779490345/image.png" alt="Logo"></img>
          </picture>
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero"/>
    </Link>
  )
}
