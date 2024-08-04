import React from 'react'
import Script from 'next/script'

const cardsData = [
  {
    id: 'card1',
    title: 'Website',
    para1:
      'We create stunning, highly optimized websites using Next.js, renowned for its exceptional SEO capabilities and performance with a focus on User Experience (UX) and Mobile Responsiveness.',
    para2:
      'Leveraging cutting-edge technologies to ensure seamless functionality and scalability, enhancing the overall performance and user experience.',
  },
  {
    id: 'card2',
    title: 'Brand Design',
    para1:
      'Crafting a Unified Visual Identity- Develop a cohesive visual identity that accurately reflects your brand’s core values and personality, ensuring it stands out in the market.',
    para2:
      'Aligning Design with Brand Values- Make sure your brand design resonates deeply with your target audience and perfectly represents your brand’s values and mission to drive engagement.',
  },
  {
    id: 'card3',
    title: 'Content Writing',
    para1:
      'Define precise goals for your content creation, such as enhancing brand awareness or driving engagement, and gain a thorough understanding of your audience’s needs.',
    para2:
      'Integrate relevant keywords for better search engine rankings while maintaining natural and engaging writing to captivate your audience effectively.',
  },
  {
    id: 'card4',
    title: 'Product Design',
    para1:
      'Emphasizing User-Centered Design- Prioritize the needs, preferences, and limitations of end-users to create designs that are both functional and appealing.',
    para2:
      'Continuously develop and test multiple prototypes during the design process, incorporating feedback to refine and improve the design progressively.',
  },
  {
    id: 'card5',
    title: 'Marketing Strategy',
    para1:
      'Precisely identify and understand your target audience through a detailed analysis of demographics, psychographics, and purchasing behaviors to tailor your marketing efforts.',
    para2:
      'Leverage analytics and performance metrics to drive your marketing decisions and strategies, ensuring a data-driven approach for optimal results.',
  },
]

const OurServices = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col p-4 md:p-8 py-8 md:py-12">
      <div>
        <p className="max-w-80">
          Are you a small or medium-sized business looking to establish or
          enhance your online presence? Look no further! We're here to help you
          achieve your goals with our comprehensive digital solutions.
        </p>
      </div>

      {/* our services */}
      <div className="flex flex-col md:flex-row justify-between w-full my-12 gap-8 md:gap-0">
        {/* Heading */}
        <div className="w-full md:w-1/2 flex flex-col md:items-start items-center">
          <div className="w-full md:sticky top-[20%]">
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-thin leading-tight text-left md:text-left italic">
              OUR <br /> SERVICES
            </h2>
            <div className="h-72">
              <Script
                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                type="module"
              ></Script>

              <dotlottie-player
                src="https://lottie.host/1ee70cc8-4691-48ce-b639-dd89c63ffc19/27FrwsOdpg.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </div>

        {/* Cards */}
        <ul className="space-y-6 sm:space-y-8 xl:space-y-16 w-full md:w-1/2">
          {cardsData.map((card, index) => (
            <li
              key={card.id}
              className="md:sticky shadow-xl top-[]"
              style={{ top: `${3 * index + 20}%` }}
            >
              <div className="flex bg-white flex-col justify-between items-center transition-all duration-500">
                <div className="bg-white border-2 border-[#ff5200] w-full p-2 text-center">
                  <h2 className="text-black text-xl md:text-2xl lg:text-3xl">
                    {card.title}
                  </h2>
                </div>
                <div className="p-4 border-2 border-[#ff5200] bg-white h-auto md:h-[20rem] lg:h-[20rem] xl:h-[17rem] 2xl:h-[17rem] w-full flex flex-col justify-between gap-2">
                  <h2 className="text-black text-sm md:text-base lg:text-lg 2xl:text-xl">
                    {card.para1}
                  </h2>
                  <h2 className="text-black text-sm md:text-base lg:text-lg 2xl:text-xl">
                    {card.para2}
                  </h2>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OurServices
