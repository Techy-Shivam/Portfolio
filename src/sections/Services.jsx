import React from 'react'

const Services = () => {
  return (
    <>
    <div className='bg-white text-black'>
      <div className="main-container pb-8 lg:pb-12">
        <h3>Services in detail</h3>
      </div> 
    </div>
    <div className="relative">
      <div className="bg-black text-white pt-16 lg:pt-20 pb-[30rem] sticky top-4">
        <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Side */}
           <div className="flex gap-6 lg:gap-8">
            <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>01</span>
            <h2 className='text-[8vw] md:text-5xl font-heading font-bold leading-[1]'>
              Web Development <br />
              & Maintenance
            </h2>
           </div>

          {/* Right Side */}
          <div className="flex items-center">
            <p className="text-lg lg-text-xl leading-relaxed">
              I build responsive, modern, and user-friendly websites tailored to your needs, and ensure they stay updated, secure, and optimized. From creating new websites to maintaining and improving existing ones, I provide end-to-end support so your online presence always performs at its best.
            </p>
          </div>


        </div>
      </div>
      <div className="bg-[#e9e9f0] text-black pt-16 lg:pt-20 pb-[25rem] sticky top-1">
        <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Side */}
           <div className="flex gap-6 lg:gap-8">
            <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>02</span>
            <h2 className='text-[8vw] md:text-5xl font-heading font-bold leading-[1]'>
              UI/UX Design <br />
              & Frontend Development
            </h2>
           </div>

          {/* Right Side */}
          <div className="flex items-center">
            <p className="text-lg lg-text-xl leading-relaxed">
              I design and develop clean, engaging, and user-friendly interfaces that deliver a smooth experience across all devices. With a focus on modern design principles and interactive elements, I bring ideas to life through intuitive layouts and pixel-perfect frontend development.
            </p>
          </div>


        </div>
      </div>
      <div className="bg-white text-black py-16 lg:py-20 sticky top-3">
        <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Side */}
           <div className="flex gap-6 lg:gap-8">
            <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>03</span>
            <h2 className='text-[8vw] md:text-5xl font-heading font-bold leading-[1]'>
              Freelance Tech <br />
              Solutions
            </h2>
           </div>

          {/* Right Side */}
          <div className="flex items-center">
            <p className="text-lg lg-text-xl leading-relaxed">
             I offer tailored freelance solutions to bring your unique ideas to life, whether it’s building a personal portfolio, a business website, or adding custom features to existing projects. My goal is to provide flexible, reliable, and creative coding support that fits your needs.
            </p>
          </div>


        </div>
      </div>

    </div>
    </>
  )
}

export default Services