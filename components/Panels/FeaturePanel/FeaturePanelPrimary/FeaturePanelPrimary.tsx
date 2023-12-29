import BackgroundImageContainer from "@/components/BackgroundImageContainer/BackgroundImageContainer";
import styles from "@/components/Panels/FeaturePanel/FeaturePanel.module.scss";
import model2 from "@/public/images/model_3.jpg";

function FeaturePanelPrimary() {
  return (
    <div className={styles.feature_panel_primary}>
      <BackgroundImageContainer
        alt="young woman wearing sunglasses looking at phone"
        imageSrc={model2.src}
        bgPosition={["50%", "20%"]}
        textPosition={{ top: "20px", left: "25px" }}
        textSize={{ height: "15rem", width: "19rem" }}
      >
        <h1>Heyo</h1>
      </BackgroundImageContainer>
    </div>
  );
}

export default FeaturePanelPrimary;
