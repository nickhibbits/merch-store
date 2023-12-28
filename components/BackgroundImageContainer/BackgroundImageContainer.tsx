import { ReactNode } from "react";
import styles from "./BackgroundImageContainer.module.scss";
// import { StaticImageData } from "next/image";

interface BackgroundImageContainerProps {
  imageSrc: any;
  children: ReactNode;
  bgPosition: {
    first: string;
    second: string;
  };
}

function BackgroundImageContainer({
  imageSrc,
  bgPosition,
  children,
}: BackgroundImageContainerProps) {
  const containerStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: `${bgPosition.first} ${bgPosition.second}`,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      {children}
    </div>
  );
}

export default BackgroundImageContainer;
