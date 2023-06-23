import React, { useState } from 'react'

export default function About(props) {
  // const [myStyle, setMyStyle]=useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // })
  // const [btntext, setBtnText]=useState("Enable Dark Mode")
//  const toggleStyle=()=>{
//     if(myStyle.color==='black')
//     {
//       setMyStyle({
//         color: 'white',
//         backgroundColor: 'black',
//         border: '1px solid white'
//       })
//       setBtnText('Enable Light Mode')
//     }
//     else
//     setMyStyle( {
//       color: 'black',
//       backgroundColor: 'white',
//     })
//     setBtnText('Enable Dark Mode')
//   }
  

let myStyle={
  color: props.mode=='dark'?'white':'#042743',
  backgroundColor: props.mode=='dark'?'rgb(36 74 104)':'white',
  // border: '1px solid',
  // borderColor: props.mode=='dark'?'white':'#042743',
}
 
  return (
    <div>
      <div className="container" >
        <h3 className='my-3' style={{color: props.mode=='dark'?'white':'#042743'}}>About Us</h3>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze your text
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong> TextUtlis gives you a way to analyze your text quickly and efficiently, Be it word count, character count etc</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Free to use
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>Its a free character counter tool that provides instant character count & word count statistics for a given text. TextUtlis reports the no of words and characters. Thus it is suitable fro writing text and word/character</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="conatainer my-3">
      <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
      </div> */}
    
    </div>
  )
}
