"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
        <svg
          style={{ filter: "contrast(125%) brightness(110%)" }}
          className="fixed z-[1] w-full h-full opacity-[35%]"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
          <motion.svg
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="block w-[100px] row-start-2 mb-8 md:mb-6"
            viewBox="0 0 87 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M175 858 c-2 -7 -39 -121 -81 -253 -42 -131 -79 -245 -81 -253 -4
              -10 10 -12 67 -10 l73 3 14 48 14 48 86 -3 87 -3 15 -47 15 -48 79 0 c71 0 79
              2 75 18 -3 9 -41 128 -84 265 l-78 247 -99 0 c-69 0 -99 -4 -102 -12z m120
              -209 c13 -46 25 -90 25 -96 0 -9 -18 -13 -56 -13 -41 0 -55 3 -52 13 3 6 16
              51 29 99 13 48 25 86 26 84 2 -2 14 -41 28 -87z"/>
              <path d="M610 605 l0 -265 75 0 75 0 0 265 0 265 -75 0 -75 0 0 -265z"/>
              <path d="M860 605 l0 -265 55 0 55 0 0 94 0 94 95 4 c105 4 130 16 173 78 25
              37 30 115 11 153 -41 80 -110 107 -276 107 l-113 0 0 -265z m265 150 c18 -17
              25 -35 25 -63 0 -57 -25 -76 -111 -80 l-69 -4 0 86 0 86 65 0 c57 0 69 -3 90
              -25z"/>
              <path d="M1340 606 l0 -266 55 0 55 0 0 95 0 95 43 0 42 0 48 -95 47 -95 61 0
              61 0 -56 104 c-31 57 -56 108 -56 113 0 5 13 16 29 26 59 35 77 148 34 213
              -33 51 -86 67 -230 72 l-133 4 0 -266z m255 149 c16 -15 25 -36 25 -55 0 -19
              -9 -40 -25 -55 -20 -21 -34 -25 -85 -25 l-60 0 0 80 0 80 60 0 c51 0 65 -4 85
              -25z"/>
              <path d="M1810 605 l0 -265 175 0 175 0 0 45 0 45 -120 0 -120 0 0 70 0 70
              105 0 105 0 0 40 0 40 -105 0 -105 0 0 65 0 65 120 0 120 0 0 45 0 45 -175 0
              -175 0 0 -265z"/>
              <path d="M2230 606 l0 -266 55 0 55 0 0 95 0 95 78 0 c89 0 151 24 186 73 31
              42 29 140 -2 185 -43 60 -90 75 -239 80 l-133 4 0 -266z m265 149 c31 -30 33
              -83 6 -116 -16 -19 -30 -24 -90 -27 l-71 -4 0 86 0 86 65 0 c57 0 69 -3 90
              -25z"/>
          </motion.svg>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[130px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
            Practice <span className="font-inter text-[#407BBF]">PEI {"&"} </span> <br /> 
            <span className="font-inter text-[#407BBF]">case </span>
            questions.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Platform
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Full access to our platform, including all questions and
                solutions.
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Community
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Join a community of like-minded individuals, and learn from each
                other.
              </p>
            </div>
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              {/* <Link
                href="https://github.com/Tameyer41/liftoff"
                target="_blank"
                className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                  <svg
                    className="w-[16px] h-[16px] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.5 6.5L12 12.25L18.5 6.5"
                    ></path>
                  </svg>
                </span>
                Star on Github
              </Link> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="/demo"
                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> Try it out </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </main>

        <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div>

        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
        <div className="h-[60px] bg-[#1D2B3A] fixed bottom-0 z-20 w-full flex flex-row items-center justify-evenly">
          <p className="text-white/80 text-base md:text-lg font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
            Interviews from McKinsey, BCG, Bain, Roland Berger, Oliver Wyman, and more
          </p>
        </div>
      </div>
    </AnimatePresence>
  );
}
