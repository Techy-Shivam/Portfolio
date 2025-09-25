import Btn from '../components/Btn'
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import github from '../assets/github.png'
import linkdin from '../assets/linkedin.png'
import x from '../assets/instagram.png'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Hero = () => {

  const heroRef = useRef(null)

  useGSAP(() => {

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1
    });

    SplitText.create("h1", {
      type: "lines , words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: 100,
          opacity: 0,
          stagger: 0.5,
          duration: 0.2
        })
      }
    })

    SplitText.create("h2", {
      type: "lines , words",
      mask: "lines",
      ease: "bounce.out",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          delay: 0.3
        })
      }
    })

    gsap.from(".gradient-btn", {
      opacity: 0,
      y: 80,
      duration: 0.5,
      delay: 1.25,
      ease: "power2.in"
    })

    gsap.from(".star svg", {
      opacity: 0,
      rotate: 180,
      scale: 0,
      duration: 0.5,
      delay: 0.7,
      transformOrigin: "center center",
      ease: "back.out(1.7)"
    })

  }, { scope: heroRef })


  return (
    <>
      <div ref={heroRef} className='relative overflow-hidden'>

        <div className='main-container h-screen flex flex-col lg:justify-center items-start lg:pt-15 max-lg:pt-35'>
          <h1 className='text-[30px] lg:text-[3.2vw] uppercase font-heading font-bold'>Shivam Shukla</h1>
          <h2 className='text-5xl lg:text-[7.5vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6'>Web Developer <br /> & <span className='text-stroke'> Freelancer </span></h2>
          <div className='flex items-center justify-center gap-2'>
            
            <a href="https://github.com/Techy-Shivam"><img className='hover:scale-[1.1] h-[9.5vw] gap-1 cursor-pointer gradient-btn lg:h-[3vw]' src={github} alt="" /></a>
            
            <a href="https://www.linkedin.com/in/shivam-shukla-569297225/"><img className='hover:scale-[1.1] h-[11vw] gap-1 cursor-pointer gradient-btn lg:h-[3vw]' src={linkdin} alt="" /></a>

            <a href="https://www.instagram.com/__.shivam.13/"><img className='hover:scale-[1.1] h-[11vw] gap-1 cursor-pointer gradient-btn lg:h-[3vw]' src={x} alt="" /></a>
          
          </div>
          <Btn text="Let's Talk" link="mailto:shivamkumarsukla13@gmail.com" className='gradient-btn relative top-5' />
        </div>
        <div className="star absolute -z-10 top-95 lg:top-32 right-0 lg:right-[-10%] max-w-[80vw] overflow-hidden">
          <svg
            className="h-[40vh] lg:h-[95vh] w-auto"
            viewBox="0 0 653 631"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >         <path d="M290.361 1.55611L333.686 284.91L333.88 286.179L334.595 285.114L496.712 43.7172L530.894 66.1542L354.53 298.39L353.719 299.458L355.031 299.182L644.761 238.164L651.694 276.116L359.086 321.398L357.759 321.603L358.897 322.315L605.849 476.828L581.885 510.336L344.939 341.783L343.894 341.039L344.16 342.294L403.733 622.683L363.139 630.092L319.819 346.737L319.626 345.469L318.911 346.534L156.783 587.928L122.522 565.048L298.964 333.261L299.777 332.192L298.463 332.469L8.73045 393.474L1.564 354.212L294.405 310.247L295.74 310.046L294.596 309.329L47.5646 154.375L71.6092 121.305L308.567 289.864L309.612 290.609L309.345 289.353L249.767 8.96559L290.361 1.55611Z" stroke="url(#paint0_linear_1074_2)" />
            <defs>
              <linearGradient id="paint0_linear_1074_2" x1="4.77595" y1="374.593" x2="648.724" y2="257.056" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF4D6D" />
                <stop offset="0.25" stopColor="#BD3EB2" />
                <stop offset="0.5" stopColor="#7B2FF7" />
                <stop offset="0.75" stopColor="#2F86F7" />
                <stop offset="1" stopColor="#2FF7ED" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Hero