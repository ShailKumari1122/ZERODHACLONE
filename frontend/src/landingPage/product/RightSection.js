import React from 'react'

const RightSection = ({imageUrl,productName, productDiscription,learnMore}) => {
  return (
    
    <div className='container'>
     <div className='row'>
    
      <div className='col-6 mt-5 p-5'>
        <h1>{productName}</h1>
        <p>{productDiscription}</p>

        <div >
          <a href={learnMore} style={{marginLeft: "50px"}}>LearnMore<i class="fa-solid fa-arrow-right"></i></a>
        </div>
        
      </div>

      <div className='col-6 '>
        <img src={imageUrl}></img>
      </div>
     </div>
       
    </div>
  )
}

export default RightSection
