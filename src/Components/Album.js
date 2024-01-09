import PhotoAlbum from "react-photo-album";
import image1 from "../Static/image/1.jpg"
import image2 from "../Static/image/2.jpg"
import image3 from "../Static/image/3.jpg"
import image4 from "../Static/image/4.jpg"
import image5 from "../Static/image/5.jpg"
import image6 from "../Static/image/6.jpg"
import image7 from "../Static/image/7.jpg"
import image8 from "../Static/image/8.jpg"
import image9 from "../Static/image/9.jpg"
import image10 from "../Static/image/10.jpg"
import image11 from "../Static/image/11.jpg"
import image12 from "../Static/image/12.jpg"
import image13 from "../Static/image/13.jpg"
import image14 from "../Static/image/14.jpg"
import image15 from "../Static/image/15.jpg"
import image16 from "../Static/image/16.jpg"
import image17 from "../Static/image/17.jpg"
import image18 from "../Static/image/18.jpg"
import image19 from "../Static/image/19.JPG"
import image20 from "../Static/image/20.jpg"
const photos = [
  { src: image1, width: 300, height: 400 },
  { src: image2, width: 300, height: 450 },
  { src: image3, width: 300, height: 400 },
  { src: image4, width: 400, height: 500 },
  { src: image12, width: 300, height: 500 },
  { src: image5, width: 300, height: 500 },
  { src: image6, width: 400, height: 500 },
  { src: image7, width: 200, height: 300 },
  { src: image8, width: 400, height: 500 },
  { src: image9, width: 400, height: 500 },
  { src: image10, width: 400, height: 500 },
  { src: image11, width: 200, height: 300 },
  { src: image13, width: 300, height: 400 },
  { src: image14, width: 400, height: 500 },
  { src: image15, width: 300, height: 300 },
  { src: image16, width: 400, height: 500 },
  { src: image17, width: 300, height: 400 },
  { src: image18, width: 400, height: 500 },
  { src: image19, width: 300, height: 300 },
  { src: image20, width: 400, height: 500 },
 

];

export default function Album() {

  return <PhotoAlbum layout="masonry" columns={5} photos={photos} padding={10} />;
}