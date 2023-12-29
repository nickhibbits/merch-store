import { ReactNode } from "react";
import styles from "./BackgroundImageContainer.module.scss";
import Image from "next/image";

interface BackgroundImageContainerProps {
  imageSrc: any;
  children: ReactNode;
  bgPosition: [string, string];
  alt: string;
  textPosition: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  textSize: {
    height: string;
    width: string;
  };
}

function BackgroundImageContainer({
  alt,
  bgPosition,
  children,
  imageSrc,
  textPosition,
  textSize,
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
      <div
        className={`${styles.text_wrapper} flex flex_center`}
        style={{ ...textPosition, ...textSize }}
      >
        {children}
      </div>
    </div>
  );
}

export default BackgroundImageContainer;
