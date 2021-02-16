import React from 'react'

const MainBtn = props => {
    const { handleClick, color, text } = { ...props }
    return (
        <div className="flex justify-center mb-4">
            <button onClick={handleClick} className={`bg-${color}-500 px-8 py-2 rounded-lg text-lg text-white opacity-75 hover:opacity-100 border-2 border-${color}-200 hover:font-bold`}>
                {text}
            </button>
        </div>
    )
}

export default MainBtn