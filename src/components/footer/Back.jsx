import Link from 'next/link'
import React from 'react'

const Back = () => {
  return (
    <div className="z-0 max-h-[500px] lg:max-h-[300px] fixed bottom-0 w-full flex flex-col justify-end overflow-hidden mb-3 bg-white">
      <div className="max-w-screen-2xl max-h-[500px] lg:max-h-[300px] items-end bottom-0 w-full mx-auto flex flex-col lg:flex-row justify-end gap-4 md:gap-12 lg:justify-center text-4xl p-4 md:p-8">
        {/* for logo */}
        <div className="flex w-full lg:w-1/2 justify-between">
          <div className="">
            <h1 className="text-5xl md:text-7xl lg:text-[6rem]">TRIP</h1>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem]">TRIBE</h1>
          </div>
          <div className="mt-8">
            <Link
              href="#"
              className="text-4xl whitespace-nowrap text-white bg-[#ff5200] lg:bg-transparent lg:text-[#ff5200] border border-[#ff5200] px-4 py-2 rounded-full lg:hover:bg-[#ff5200] hover:text-white cursor-pointer"
            >
              Hire Us
            </Link>
          </div>
        </div>
        {/* for details  */}
        <div className="w-full lg:w-1/2 flex flex-grow flex-col-reverse lg:flex-row gap-16 justify-between">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-16">
            <div className="flex flex-row md:flex-col justify-between">
              <h2 className="text-base md:text-xl lg:text-4xl text-[#ff5200]">
                MENU
              </h2>
              <p className="text-sm md:text-base lg:text-lg">Connect</p>
              <p className="text-sm md:text-base lg:text-lg">Our Work</p>
              <p className="text-sm md:text-base lg:text-lg">About Us</p>
            </div>
            <div className="flex flex-row md:flex-col justify-between">
              <h2 className="text-base md:text-xl lg:text-4xl text-[#ff5200]">
                CONTACT
              </h2>
              <p className="text-sm md:text-base lg:text-lg">Instagram</p>
              <p className="text-sm md:text-base lg:text-lg">Facebook</p>
              <p className="text-sm md:text-base lg:text-lg">Behance</p>
              <p className="text-sm md:text-base lg:text-lg">X / Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Back
