import React from 'react'

const Universe = () => {
  return (
    <div className='container'>
     <div className='row text-center'>
    
      <h1>The Zerodha Universe</h1>
      <p>
          Extend your trading and investment experience even further with our
          partner platforms
      </p>

       <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img  style={{width: "150px"}}src="media/streakLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img  style={{width:"140px"}}src="media/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width: "100px"}} src="media/images/dittoLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      
      
     </div>
       
    </div>
  )
}

export default Universe
