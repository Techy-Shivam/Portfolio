import React from 'react'

const Btn = ({text , link , className=""}) => {
  return (
    <div className='mt-2'>
        <a href={link} className={`btn uppercase font-heading border-2 border-transparent text-center min-w[205px] px-6 py-3 lg:py-3 rounded-full font-semibold ${className}`}>{text}</a>
    </div>
  )
}

export default Btn