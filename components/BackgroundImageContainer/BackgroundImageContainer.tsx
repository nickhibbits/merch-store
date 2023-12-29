import { ReactNode } from "react";
import styles from "./BackgroundImageContainer.module.scss";
import Image from "next/image";
// import { StaticImageData } from "next/image";

interface BackgroundImageContainerProps {
  imageSrc: any;
  children: ReactNode;
  bgPosition: [string, string];
  alt: string;
}

function BackgroundImageContainer({
  alt,
  bgPosition,
  children,
  imageSrc,
}: BackgroundImageContainerProps) {
  const containerStyle = {
    backgroundPosition: `${bgPosition[0]} ${bgPosition[1]}`,
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.bgImage}
        src={imageSrc}
        alt={alt}
        fill={true}
        style={{
          objectFit: "cover",
        }}
        objectPosition={containerStyle.backgroundPosition}
      />
      <div className={styles.text_wrapper}>{children}</div>
    </div>
  );
}

export default BackgroundImageContainer;
