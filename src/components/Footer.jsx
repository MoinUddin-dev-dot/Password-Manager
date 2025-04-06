import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center flex-col bg-slate-800 text-white fixed bottom-0 w-full'>
      <div className="logo font-bold  text-2xl">
          <span className="text-green-500"> &lt; &nbsp;</span>
          Pass
          <span className="text-green-500">OP&nbsp; / &gt;</span>
          </div>
          <div className='flex gap-2'>
            Created with Moin Uddin with <img className='w-6' src="/icons/heart.png" alt="heart logo" />
          </div>
    </div>
  )
}

export default Footer
