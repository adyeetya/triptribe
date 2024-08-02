import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-between bg-black text-gray-200">
      <div className="flex md:flex-grow items-center justify-center">
        <div className="max-w-screen-2xl mx-auto flex flex-col-reverse gap-8 md:flex-row w-full justify-center items-center p-4 md:px-12">
          {/* for title and tagline */}
          <div className="w-full md:w-2/3 text-left ">
            <h5 className="text-xs md:text-base">
              The Companion of your Journey.
            </h5>
            <div className="">
              <h1 className="text-[100px] md:text-[150px] xl:text-[200px] 2xl:text-[220px] font-bold leading-none glass-text">
                TRIP
              </h1>
              <h1 className="text-[100px] md:text-[150px] xl:text-[200px] 2xl:text-[220px] font-bold leading-none glass-text mt-4">
                TRIBE
              </h1>
            </div>
          </div>
          {/* for video */}
          <div className="w-full md:w-1/3 ">
            <video
              className="w-full h-full object-cover"
              src="/videos/logo-animation.mp4"
              muted
              loop
              playsInline
              autoPlay
            ></video>
          </div>
        </div>
      </div>
      <div className="w-full text-center px-4 md:px-0 mb-8">
        <p className="text-xs md:text-base">
          We build Market Leaders in B2B and B2C Market with Uniquely Crafted
          Brands and Standout Websites.
        </p>
      </div>
    </div>
  )
}

export default Hero
