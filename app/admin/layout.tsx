import React from 'react'

const layout = ({children}) => {
  return (
    <div className="w-screen h-[calc(100svh-4.5rem)] font-inter bg-gray-100 flex items-center justify-center px-6 md:px-12 lg:px-24"
    style={{
      backgroundImage: "url('/images/key.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
         
        {children}
    </div>
  )
}

export default layout
