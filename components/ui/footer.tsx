import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <a href="/tos" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">이용약관 · 개인정보 활용 동의서</a>
            </div>
            <div className="text-sm text-gray-600">
              <a href="/acknowledgements" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">감사의 말</a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Links</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/discord" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">디스코드</a>
              </li>
              <li className="mb-2">
                <a href="https://www.youtube.com/channel/UC1lB210qPbvkO8GlLssC2qg" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">유튜브</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">TEAM DoubleEight</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">@doubleeight</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">@sohyeon</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">@norhu1130</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">프로젝트들</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">발로봇</a>
              </li>
              <li className="mb-2">
                <a href="https://valobot.gitbook.io/vbaskr" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">VBAS 2.0</a>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a href="https://github.com/kldiscord" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; 2023 TEAM DoubleEight, All rights reserved. | <strong>발로봇은</strong> Team DoubleEight의 소중한 자산입니다.</div>

        </div>

      </div>
    </footer>
  )
}
