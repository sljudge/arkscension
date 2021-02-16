import React, { useState, useEffect } from 'react'

const Banner = props => {
   const { header, subHeader, imgUrl, white } = { ...props }

   return (
      <div className="min-w-full min-h-132 h-132 bg-gray-400 flex items-center justify-center absolute relative bg-center bg-cover bg-no-repeat">
         <div>
            <h1 class={`min-w-24 mb-2 p-4 header text-white ${white ? 'text-white' : 'text-black'}`}>{header}</h1>
         </div>
      </div>
   )
}

export default Banner