import React from "react"
import image from "../Static/image/em.PNG"
export default function BirthdayCard() {
  return (
    <div class="birthday-card">
    <div class="cover-inner">
        <img src={image} width="100%" alt="text"/>
    </div>

    <div class="cover-outer">
        <img src="https://images.esellerpro.com/3274/I/318/37/lrgscaleAO002.jpg" width="100%" alt="text"/>
    </div>

        <div class="text">
          <p class="title">
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

