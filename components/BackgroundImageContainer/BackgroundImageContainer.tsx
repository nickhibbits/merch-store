import { ReactNode } from "react";
import styles from "./BackgroundImageContainer.module.scss";
// import { StaticImageData } from "next/image";

interface BackgroundImageContainerProps {
  imageSrc: any;
  children: ReactNode;
}

function BackgroundImageContainer({
  imageSrc,
  children,
}: BackgroundImageContainerProps) {
  const containerStyle = {
    backgroundImage: `url(${imageSrc})`,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      {children}
    </div>
  );
}

export default BackgroundImageContainer;
