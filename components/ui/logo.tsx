import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
          <picture id="footer-logo" >
            <img src="https://media.discordapp.net/attachments/1151062950539427861/1283344911332151346/a.png?ex=66f91116&is=66f7bf96&hm=71ce1d9823c809b2c9c9fdae07f2a92d977efa8d2bdd5900df45b4aba08d42b6&=&format=webp&quality=lossless&width=245&height=91" alt="Logo"></img>
          </picture>
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero"/>
    </Link>
  )
}
