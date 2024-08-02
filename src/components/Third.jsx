import React from 'react'
import Strips from './Strips'
import Image from 'next/image'

const projects = [
  {
    id: '1',
    image: '/images/projects/dashboard-mockup.webp',
    title: 'Dashboard',
    type: ['UIxUX', 'Website'],
  },
  {
    id: '2',
    image: '/images/projects/icon-mockup.webp',
    title: 'Yesnmore',
    type: ['UIxUX', 'Branding', 'Website', 'Product'],
  },
  {
    id: '3',
    image: '/images/projects/site-mockup.webp',
    title: 'Modular Manufacturer',
    type: ['UIxUX', 'Website', 'Branding'],
  },
  {
    id: '4',
    image: '/images/projects/product-mockup.webp',
    title: 'Products',
    type: ['Product Designs', 'Branding'],
  },
]
const Third = () => {
  return (
    <div
      className="min-h-[2000px] flex flex-col  bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: 'url(/images/orange-bg.png)',
      }}
    >
      <div className="mt-40">
        <Strips />
      </div>

      <div className="pt-40 md:pt-80 max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-center w-full gap-4 md:gap-8 p-4 md:p-8">
        <h2 className="text-[50px] md:text-[100px] xl:text-[100px] 2xl:text-[120px] font-thin leading-none text-white">
          welcome to <br /> AFFORDABLE <br /> COMPATIBLE <br />
          INNOVATIVE <br />{' '}
          <span className="text-black font-semibold italic">समाधान</span>
        </h2>
        <div className="max-w-xl flex flex-col justify-end mb-4">
          <p>
            We build and imagine brands, websites, mobile apps and all the
            digital experiences in between. Our services are focused on a
            business&apos;s goals and winning the hearts of your customers.
          </p>

          <p>
            Over the years we&apos;ve been called lots of things - builders,
            innovators, <span className="italic underline">समाधान</span> , but
            our favorite has got to be
            <span className="italic text-white"> &quot;go-to-team&quot;</span>
          </p>
        </div>
      </div>
      <div className="my-40">
        <Strips />
      </div>

      <div className="max-w-screen-2xl mx-auto flex  flex-col lg:flex-row items-start gap-8 px-4 md:p-8 md:mt-32">
        {/* side text */}
        <div className="lg:w-1/2 lg:sticky top-0 md:top-24 flex flex-col justify-center w-full gap-4 md:gap-8">
          <h2 className="text-[50px] md:text-[100px] xl:text-[90px] 2xl:[120px] font-thin leading-none text-black">
            POWERFUL <br /> COMPELLING <br /> EXPERIENCES
          </h2>
          <p className="max-w-xl flex flex-col justify-end">
            We take great pride in everything that we achieve on behalf of our
            clients. Our work is our passion. See what we&apos;ve created for our
            happy clients.
          </p>
        </div>
        {/* projects */}
        <div className="lg:w-1/2 w-full">
          {projects.map((project) => (
            <div key={project.id} className="space-y-6 mb-16">
              <div className="overflow-hidden lg:h-96 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="responsive"
                  objectFit="cover"
                  width={1000}
                  height={1000}
                  className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="bg-black w-fit h-fit text-gray-200 px-4 py-2">
                  {project.title}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {project.type.map((type) => (
                    <p key={type} className="bg-gray-100 text-black px-4 py-2 text-xs md:text-sm">
                      {type}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Third
