'use client'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const Strips = () => {
  const aniRef = useRef()
  const { scrollYProgress } = useScroll({
    target: aniRef,
  })
  const translateXright = useTransform(scrollYProgress, [1, 0], [200, -200])
  const translateXleft = useTransform(scrollYProgress, [1, 0], [-200, 200])

  const translateXrightMob = useTransform(scrollYProgress, [1, 0], [400, -400])
  const translateXleftMob = useTransform(scrollYProgress, [1, 0], [-400, 400])

  const translateXrightWithSpring = useSpring(translateXright, {
    stiffness: 200,
    damping: 40,
  })
  const translateXleftWithSpring = useSpring(translateXleft, {
    stiffness: 200,
    damping: 40,
  })

  const translateXrightWithSpringMob = useSpring(translateXrightMob, {
    stiffness: 10,
    damping: 10,
  })
  const translateXleftWithSpringMob = useSpring(translateXleftMob, {
    stiffness: 10,
    damping: 10,
  })

  return (
    <div>
      <div
        className="w-full overflow-hidden mx-auto text-center z-10 "
        ref={aniRef}
      >
        <motion.h2
          className="md:text-3xl text-3xl text-[#ff5200] text-center  whitespace-nowrap mb-4"
          style={{
            x: translateXleftWithSpring,
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          <span className="font-bold">
            TripTribe TripTribe TripTribe TripTribe TripTribe TripTribe
            TripTribe TripTribe
          </span>
        </motion.h2>
        <motion.h2
          className="md:text-[76px] text-6xl  text-center pr-2 sm:my-8 mb-8 whitespace-nowrap"
          style={{
            x: translateXrightWithSpring,
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          <span className="font-bold">
            {' '}
            TripTribe TripTribe TripTribe TripTribe TripTribe TripTribe
            TripTribe TripTribe
          </span>
        </motion.h2>
      </div>
    </div>
  )
}

export default Strips
