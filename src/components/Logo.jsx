import React from 'react'

function Logo({width = "50px", height="30px"}) {
  return (
    <div className='mt-2 ml-5'>
      <img src="https://dsim.in/blog/wp-content/uploads/2013/06/blog.jpg"
       alt="Logo" 
       style={{ width, height }}
       />
    </div>
  )
}

export default Logo
