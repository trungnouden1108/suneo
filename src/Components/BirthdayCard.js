import React from "react"
import image from "../Static/image/em.PNG"
import card from "../Static/image/card.jpg"
export default function BirthdayCard() {
  return (
    <div className="birthday-card">
    <div className="cover-inner">
        <img src={image} width="100%" alt="text"/>
    </div>

    <div className="cover-outer">
        <img src={card} width="100%" alt="text"/>
    </div>

        <div className="text">
          <p className="title">
            Chúc mừng sinh nhật <br/> Em
          </p>
          <p>
          Mừng sinh nhật em, anh chỉ chúc em được nhiều sức khỏe thôi. Còn về hạnh phúc và niềm vui, anh mong rằng chính mình sẽ là người mang những điều đó đến với em.
          </p>
          <p>Thương em!</p>
        </div>
    </div>
  )
};

