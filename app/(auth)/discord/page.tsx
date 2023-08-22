'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function discord() {
  const rounter = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            rounter.push('https://discord.gg/qC2AWr8VVU')
        },3000)
    },[]);
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">발로봇 디스코드 서버에서<br></br>다양한 소식들을 알아보세요</h1>
            <h1 className="h1">ﾠﾠ</h1>
            <h3 className="h3">3초후 리다이렉트 됩니다.</h3>
            <h2 className="h2">ﾠﾠ</h2>
            <div>
              <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://discord.gg/qC2AWr8VVU">리다이렉트 되지 않을시 클릭하세요</a>
            </div>
          </div>

          {/* Form */}
          

        </div>
      </div>
    </section>
  )
}

