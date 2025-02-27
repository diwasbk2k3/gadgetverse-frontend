import React from 'react'
import ShopCard from './ShopCard'
import Footer from './Footer'

function Shop() {
  return (
    <>
    <div className= 'bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400'>
    {/* Search Bar */}
    <div className="flex w-full mb-4">
      <input
        type="text"
        placeholder="Search gadgets here"
        className="ml-4 mt-5 flex-grow px-4 py-3 rounded-l-lg text-black outline-none bg-white"
      />
      <button className="mt-5 mr-4 px-6 md:px-8 bg-black text-white rounded-r-lg hover:bg-gray-800 hover:cursor-pointer w-full sm:w-auto">
        Search
      </button>
    </div>

    <div className="flex flex-wrap md:gap-0 md:px-0 px-4 gap-2">
      <ShopCard/>
    </div>
    
    <div className="bg-gradient-to-r from-blue-400 via-red-300 to-blue-400 mt-8">
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default Shop