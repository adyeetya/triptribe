import Image from 'next/image'
import React from 'react'
import Script from 'next/script'
const Second = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col p-4 md:p-8 py-8 md:py-12">
      {/* about */}
      <div></div>
      {/* big text */}
      <div className="pt-8 md:pt-12">
        <h2 className="text-[50px] md:text-[100px] xl:text-[120px] 2xl:text-[120px] font-thin leading-none">
          CALLING ALL <br />{' '}
          <span className="text-[#ff5200] italic">LEADERS</span> <br />{' '}
          VISIONARIES <br /> & MAKERS
        </h2>
      </div>
      {/* gif and p text */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16 py-8 md:py-12">
        {/* vids */}
        <div className="flex flex-row items-start">
          <div className="w-20 md:w-32 h-20 md:h-32">
            <Script
              src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"
            ></Script>

            <dotlottie-player
              src="https://lottie.host/e0e14799-7a40-466b-aa32-202df8c479d0/Hae5JPwY5c.json"
              background="transparent"
              speed="1"
              className="w-20 md:w-32 h-20 md:h-32"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="w-20 md:w-32 h-20 md:h-32">
            <Script
              src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"
            ></Script>

            <dotlottie-player
              src="https://lottie.host/6c039547-eeec-411e-aa60-c6dc4ac6c6de/JOESjgxmIA.json"
              background="transparent"
              speed="1"
              className="w-20 md:w-32 h-20 md:h-32"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        {/* text */}
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
            <div>
              <p>
                Trip-Tribe is a national branding and web app development studio
                built from the best talent in the nation. We strive to transform
                the most innovative businesses through a powerful mix of
                exquisite design, development, and strategy solutions.
              </p>
            </div>
            <div>
              <p>
                Learn more about us We partner with leaders and entrepreneurs at
                critical inflection points to help them better connect and
                engage with their customers. Together we build brands, products,
                and all the digital experiences in between to support growth in
                competitive markets.
              </p>
            </div>
          </div>
          <div>
            <button className="whitespace-nowrap text-base 2xl:text-lg rounded-full px-4 py-2 bg-[#ff5200] text-white hover:text-[#ff5200] border border-white hover:border-[#ff5200] hover:bg-white transition duration-300 ease-in-out">
              learn more about us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second
