import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@/public/images/a.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
          <picture id="footer-logo" >
             <Image src={LogoImage} width={245} height={91} alt="Banner" />
          </picture>
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero"/>
    </Link>
  )
}
