import React from 'react'

const LeftSection =({imageUrl,productName, productDiscription,tryDemo ,learnMore ,googlePlay, appStore}) => {
  return (
    <div className='container'>
     <div className='row'>
      <div className='col-6 '>
        <img src={imageUrl}></img>
      </div>
      <div className='col-6 mt-5 p-5'>
        <h1>{productName}</h1>
        <p>{productDiscription}</p>

        <div >

          <a href={tryDemo}>TryDemo<i class="fa-solid fa-arrow-right"></i></a>
          <a href={learnMore} style={{marginLeft: "50px"}}>LearnMore<i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div className='mt-3'>
           <a href={googlePlay}><img src='media/images/googlePlayBadge (1).svg'></img></a>
        <a href={appStore}  style={{marginLeft: "50px"}}><img src='media/images/googlePlayBadge (2).svg'></img></a>

        </div>
        
      </div>
     </div>
       
    </div>
  )
}

export default LeftSection
