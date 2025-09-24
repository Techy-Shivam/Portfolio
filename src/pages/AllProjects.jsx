import React from 'react'
import Projects from '../components/ProjectsData'

const AllProjects = () => {
  return (
    <>
    <div className="bg-white text-black">
      <div className="main-container py-28">
        <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:mt-16">
          {Projects.map(({id,name,link,image})=>(
            <a href={link} key={id} className='overflow-hidden flex flex-col'>
              <div className="overflow-hidden group rounded-2xl h-full">
                <img src={image} alt={name} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'/>
                <span className='uppercase leading-[1.4] lg:text-2xl font-heading mt-4'>{name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default AllProjects