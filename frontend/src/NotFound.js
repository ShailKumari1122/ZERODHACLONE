import React from 'react'

const NotFound = () => {
  return (
    <div className="container p-5 mb-4 ">
      <div className="row text-center">
        <h3 >404 not found</h3>
        <p> sorry,the page you are looking for does not exist.</p>
        <button className='p-2 btn btn-primary fs-5 mb -5' style={{width: "20%", margin: "0 auto"}}>Go home</button>
      </div>
        
    </div>
  )
}

export default NotFound
