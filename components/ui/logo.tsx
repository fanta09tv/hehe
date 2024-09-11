import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
          <picture id="footer-logo" >
            <img src="https://media.discordapp.net/attachments/1151062950539427861/1283344911332151346/a.png?ex=66e2a796&is=66e15616&hm=c3f64e9269649fc723f8cfce951b093c46ad06f1e59cc60e8a71b7ad416b0e4a&=&format=webp&quality=lossless&width=245&height=91" alt="Logo"></img>
          </picture>
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero"/>
    </Link>
  )
}
