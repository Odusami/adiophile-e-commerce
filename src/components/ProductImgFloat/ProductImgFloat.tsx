import { ST } from "next/dist/shared/lib/utils";
import Styles from "./ProductImgFloat.module.scss";
import Image from "next/image";
import Link from "next/link";
type Props = {
    img: string,
    imgTitle: string
};

const ProductImgFloat = ({img, imgTitle}: Props) => {
  const ArrowRight = "/assets/shared/desktop/icon-arrow-right.svg";
  return (
    <div className={Styles.productImgFloatBody}>
      <Image
        src={img}
        alt={imgTitle}
        width={125}
        height={125}
      />
      <h6>HEADPHONES</h6>
      <div>
        <Link href={""}>
          <p>SHOP</p>
        
            <img
              src={ArrowRight}
              alt="arrow right"
              className={Styles.floatImg}
            />
         
        </Link>
      </div>
    </div>
  );
};

export default ProductImgFloat;
