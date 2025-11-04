"use client";
import styles from "./ImageFrame.module.scss";
import Image from "next/image";
import { useState } from "react";
type Props = {
  imageProduct: string;
  name: string;
};

const ImageFrame = ({ imageProduct, name }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={styles.imgContainer}>
      {isLoading && <div className={styles.skeleton}></div>}
      <Image
        src={imageProduct}
        alt={name}
        height={260}
        width={260}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageFrame;
