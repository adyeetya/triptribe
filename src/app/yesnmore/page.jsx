import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="w-full bg-black">
      <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col gap-8 md:gap-16 2xl:gap-20 p-4 md:p-8 py-8 md:py-12   text-gray-200">
        {/* breadcrumbs */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <h1 className="text-[50px] md:text-[100px] xl:text-[120px] 2xl:text-[120px] font-thin leading-none">
            YESNMORE
          </h1>
          <div className="flex gap-2 h-fit md:mt-auto mt-2 pb-2 text-black">
            <p className="bg-gray-200 rounded-full px-3 py-1 text-sm">
              Branding
            </p>
            <p className="bg-gray-200 rounded-full px-3 py-1 text-sm">/</p>
            <p className="bg-gray-200 rounded-full px-3 py-1 text-sm">UI/UX</p>
            <p className="bg-gray-200 rounded-full px-3 py-1 text-sm">/</p>
            <p className="bg-gray-200 rounded-full px-3 py-1 text-sm">
              Website
            </p>
          </div>
        </div>

        {/* the client */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow w-full">
            <h2 className="text-xl font-semibold whitespace-nowrap">
              / THE CLIENT
            </h2>
          </div>
          <div>
            <p>
              The team at YESnMORE reached out to us to help them with a visual
              identity and Real Product Design that helped establish the company
              as an innovative leader in the Wellness & Sexual Wellness space.
              We worked diligently to transform the client’s vision into a
              scalable and polished cross-platform web and Product, experience
              that could win the hearts and minds of its target customers.
            </p>
          </div>
        </div>
        {/* big image */}
        <div className="w-full max-h-screen overflow-hidden">
          <Image
            src="/images/yesnmore/shipping.png"
            alt="yesnmore"
            width={1000}
            height={1000}
            className="w-full h-auto max-h-screen rounded-3xl object-cover"
          />
        </div>
        {/* the challenge */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="w-1/2">
              <Image
                src="/images/yesnmore/img2.webp"
                alt="mockup"
                width={1000}
                height={1000}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-16 justify-center">
              <h2 className="text-xl font-semibold whitespace-nowrap">
                / THE CHALLENGE
              </h2>
              <p>
                We empower men&apos;s to take control of their sexual health
                with confidence. We understand the silent struggles and offer a
                discreet, judgment-free space for personalized guidance and
                solutions. Explore your pleasure, optimize your performance, and
                embrace inner well-being with us. FROM INCEPTION TO REALITY
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-1/2">
              <Image
                src="/images/yesnmore/img3.webp"
                alt="mockup"
                width={1000}
                height={1000}
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/yesnmore/img4.webp"
                alt="mockup"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        {/* big image 2 */}
        <div className="w-full overflow-hidden">
          <Image
            src="/images/yesnmore/bottle1.webp"
            alt="yesnmore"
            width={1000}
            height={1000}
            className="w-full h-auto  rounded-3xl object-cover"
          />
        </div>
        {/* the approach */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="w-1/2">
              <Image
                src="/images/yesnmore/single-bottle.webp"
                alt="mockup"
                width={1000}
                height={1000}
                className="w-full h-auto max-h-screen rounded-3xl"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-16 justify-center">
              <h2 className="text-xl font-semibold whitespace-nowrap">
                / THE APPROACH
              </h2>
              <p>
                The initial stage of the design process consisted of
                low-fidelity sketches of the app&apos; s layout, where we also
                created navigation and functionality. This phase was done by
                hand, using pencil and paper. We brainstormed and explored
                several ideas for the app&apos;s layout, navigation, and
                functionality during the sketching phase. We created rough
                sketches of different screens and interactions and considered
                how the app would look and feel to the user.The sketches include
                rough illustrations of the app&apos;s UI elements, such as
                buttons, menus, and input fields.
              </p>
            </div>
          </div>
        </div>
        {/* big image 3 */}
        <div className="w-full max-h-screen overflow-hidden">
          <Image
            src="/images/yesnmore/Image4.webp"
            alt="yesnmore"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover max-h-screen rounded-3xl"
          />
        </div>
        {/* the solution */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="w-1/2">
              <Image
                src="/images/yesnmore/saucha1.webp"
                alt="mockup"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-3xl object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-16 justify-center">
              <h2 className="text-xl font-semibold whitespace-nowrap">
                / THE SOLUTION
              </h2>
              <p>
                Our team undertook a comprehensive brand identity and product
                design, with a clear goal to establish a cohesive visual
                identity and seamless user experience across all touchpoints. We
                crafted a meticulous design system that harmonized the
                brand&apos;s aesthetics with the unique interface of the Apple
                Watch App.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-1/2">
              <Image
                src="/images/yesnmore/shipping-mockup2.webp"
                alt="mockup"
                width={1000}
                height={1000}
                className="w-full h-auto max-h-screen rounded-3xl"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/yesnmore/Stationery_Mockup.webp"
                alt="mockup"
                width={1000}
                height={1000}
                className="w-full object-cover h-full max-h-screen rounded-3xl"
              />
            </div>
          </div>
        </div>
        {/* dashboard image */}
        <div className="w-full max-h-screen overflow-hidden">
          <Image
            src="/images/yesnmore/dashboard-mockup.jpg"
            alt="yesnmore"
            width={1000}
            height={1000}
            className="w-full h-auto max-h-screen rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}

export default page
