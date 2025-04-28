import React from 'react'

const Button = () => {
  return (
    <button
              onClick={() => {
                setModalState("form");
                setIsOpen(true);
              }}
              className="relative z-50 my-8 px-6 py-8 w-full max-w-[800px] shadow-lg rounded-lg bg-orange-600 hover:bg-sky-950 hover:border-2 hover:border-white transition-color linear duration-300">
              <span className="text-2xl font-bold">
                Get Free List of Our Solar Packages
              </span>
            </button>
  )
}

export default Button