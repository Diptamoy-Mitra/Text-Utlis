import React, { useState } from 'react'

export default function About() {
  const [myStyle, setMyStyle]=useState({
    color: 'black',
    backgroundColor: 'white',
  })
  const [btntext, setBtnText]=useState("Enable Dark Mode")
 const toggleStyle=()=>{
    if(myStyle.color==='black')
    {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      })
      setBtnText('Enable Light Mode')
    }
    else
    setMyStyle( {
      color: 'black',
      backgroundColor: 'white',
    })
    setBtnText('Enable Dark Mode')
  }
  
 
  return (
    <div>
      <div className="container" style={myStyle}>
        <h3>About Us</h3>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                You Can Covert Text Into Various Cases
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong> Lowercase, UpperCase, Captalized etc various features Available</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                As a Counter
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong> Its use as a words counter, read time, chaaracters counter etc</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conatainer my-3">
      <button onClick={toggleStyle} type='button' className='btn btn-outline-dark'>{btntext}</button>
      </div>
    
    </div>
  )
}
