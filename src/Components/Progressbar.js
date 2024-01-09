import React from 'react'
import cauHon from '../Static/image/cau-hon.png'
import birthDay from '../Static/image/birthday.png'
import newYear from '../Static/image/happy-new-year.png'
import anni from '../Static/image/august-11.png'

export default function Progressbar({ filled }) {
//  console.log(filled)
 const event = {
    'birth-day': [birthDay, new Date(new Date("January 13, 2024").getTime()), 2],
    // 'new-year': [newYear, new Date(new Date("February 10, 2024").getTime()), 5],
    'anni':  [anni, new Date(new Date("August 11, 2024").getTime()), 65],
    'cau-hon': [cauHon, new Date(new Date("January 13, 2025").getTime()), 85]
  }

  return (
    <div>
      <div className='progressbar-img'>
        {/* {Object.entries(event).map(([eventName, [imageSrc, eventDate, delta]]) => (
            <img src={imageSrc} alt={eventName} width={'70px'} height={'80px'} 
            style={{  position: 'relative',
                      left: `${delta}%` }} />
        ))} */}
        <img src={birthDay} alt={"alt"} width={'70px'} height={'80px'} 
            style={{ float: 'left', marginLeft: '20px'}} />
        <img src={cauHon} alt={"alt"} width={'70px'} height={'80px'} 
            style={{ float: 'right'}} />
        <img src={anni} alt={"alt"} width={'70px'} height={'80px'} 
            style={{ float: 'right', marginRight: '80px'}} />
        
      </div>
      <div className='progressbar'>
        <div style ={{
                      height: "100%", width:`${filled}%`,
                      backgroundColor: "#06f1f6",
                      transition: "width 0.5s"
                    }}
        ></div>
        {/* <span className='progress-percent'>{Math.round(filled)}%</span> */}
      </div>
    </div>
  )
}