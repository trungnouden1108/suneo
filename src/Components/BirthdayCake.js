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
  <div class="cake">
    <div class="middle"></div>
    <div class="chocs"></div>
    <div class="top"></div>
  </div>
  <div class="candles" onClick={() => handleClick()} >
    <div class="flame"></div>
    <div class="flame2"></div>
    <div class="flame3"></div>
    <div class="shadows"></div>
  </div>
</div>
  )
};

