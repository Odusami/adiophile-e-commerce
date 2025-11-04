import ImageFrame from "@/components/ImageFrame/ImageFrame"
import db from '../../public/assets/db.json'

export default function Home() {
  const productImg = db.data.find((data)=> data.id == 1)
  return (
    <div>
      
       <ImageFrame imageProduct= {productImg.image.desktop.replace('./', '/')} name={productImg.name}/>
      

      <h1>Hello world</h1>
    </div>
  );
}
