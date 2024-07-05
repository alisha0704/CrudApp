import React from 'react'

const box = ({children}: Readonly <{children: React.ReactNode}> ) => {
  return (
    <div className= "max-w-screen-lg mx-auto xl:px-20 md:px-10">
        {children}
    </div>
  )
}

export default box
