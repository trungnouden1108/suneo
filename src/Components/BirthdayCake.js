import React from "react"
export default function BirthdayCake({handleOpen}) {
    const handleClick = () => {
      const flames = document.querySelectorAll('.flame, .flame2, .flame3');
  
      flames.forEach(flame => {
        flame.style.opacity = 0;
      });
      setTimeout(() => {
        handleOpen();
      }, 2000);
    };
  return (
    <div id="birthday-cake">
  <div className="cake">
    <div className="middle"></div>
    <div className="chocs"></div>
    <div className="top"></div>
  </div>
  <div className="candles" onClick={() => handleClick()} >
    <div className="flame"></div>
    <div className="flame2"></div>
    <div className="flame3"></div>
    <div className="shadows"></div>
  </div>
</div>
  )
};

