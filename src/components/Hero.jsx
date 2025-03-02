import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // State to control animation cycles
  const [animationKey, setAnimationKey] = useState(0);
  
  // Split all text into individual components for animation
  const hiImText = "Hi, I'm ".split("");
  const nameLetters = "Isuru".split("");
  const tagline1 = "I craft pixel-perfect UI designs".split("");
  const tagline2 = "that enhanced user engagement".split("");

  // Control animation cycle
  useEffect(() => {
    const animationDuration = 5000; // How long the animation takes to complete
    const visibleDuration = 3000;   // How long the text stays fully visible
    
    const timer = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, animationDuration + visibleDuration);
    
    return () => clearInterval(timer);
  }, []);

  // Animation configuration for letters
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  // Animation for background text
  const backgroundTextVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }
      }
    }
  };

  // Helper function to create animated text
  const AnimatedText = ({ letters, className, startDelay = 0 }) => {
    return letters.map((letter, index) => (
      <motion.span
        key={`${animationKey}-${index}`}
        custom={index + startDelay}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={letterVariants}
        className={`inline-block ${className}`}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));
  };

  return (
    <section
      className='relative w-full h-screen mx-auto flex flex-col overflow-hidden'
      id='home'
    >
      {/* Background text animation */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          className="absolute whitespace-nowrap text-9xl font-bold text-gray-800/50 z-0"
          variants={backgroundTextVariants}
          animate="animate"
        >
          UI UX DESIGNER 
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className='hidden md:flex flex-col justify-center items-center mt-5'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
          <div className="flex flex-col lg:w-1/2">
            <div className="lg:text-7xl md:text-6xl text-5xl font-bold text-white text-center lg:text-left">
              <AnimatePresence mode="wait">
                <span key={animationKey}>
                  <AnimatedText 
                    letters={hiImText} 
                    className="text-white"
                  />
                  <AnimatedText 
                    letters={nameLetters} 
                    className="animate-text bg-gradient-to-r from-teal-500 via-[#915eff] to-orange-500 bg-clip-text text-transparent"
                    startDelay={hiImText.length}
                  />
                </span>
              </AnimatePresence>
            </div>
            <div className="lg:text-3xl sm:text-2xl text-xl font-semibold text-white pt-5 text-center lg:text-left">
              <AnimatePresence mode="wait">
                <span key={animationKey}>
                  <AnimatedText 
                    letters={tagline1} 
                    className="text-white"
                    startDelay={hiImText.length + nameLetters.length}
                  />
                </span>
              </AnimatePresence>
            </div>
            <div className="lg:text-3xl sm-text-2xl text-xl font-semibold text-white text-center lg:text-left">
              <AnimatePresence mode="wait">
                <span key={animationKey}>
                  <AnimatedText 
                    letters={tagline2} 
                    className="text-white"
                    startDelay={hiImText.length + nameLetters.length + tagline1.length}
                  />
                </span>
              </AnimatePresence>
            </div>
          </div>

          <div className=" lg:h-[400px] w-[420px] h-[420px] flex flex-col justify-start pt-8 lg:pt-0 lg:w-1/2">
            <img src="/src/assets/images/my.png"/>
          </div>
        </div>
      </div>

      <div className='fixed sm:bottom-10 bottom-[80px] w-full flex justify-center sm:hidden items-center z-50'>
        <a
          onClick={() => {
            document.getElementById("home").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer '>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='h-3 w-3 rounded-full bg-secondary mb-1'
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;