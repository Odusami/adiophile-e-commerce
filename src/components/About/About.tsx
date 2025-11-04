import Image from "next/image";
import styles from "./About.module.scss";
type Props = {};

const About = (props: Props) => {
  return (
    <div className={`container ${styles.aboutSecMb}`}>
      <div className="d-flex flex-md-row flex-column-reverse justify-content-between align-items-center gap-5">
        <div className={styles.textContainer}>
          <h2 className={styles.aboutHead}>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        {/* image */}
        <div className={styles.picContainer}>
          <Image
            src={"/assets/man.png"}
            alt={"profile"}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default About;
