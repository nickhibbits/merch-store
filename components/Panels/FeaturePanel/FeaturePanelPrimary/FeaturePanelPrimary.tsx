import BackgroundImageContainer from "@/components/BackgroundImageContainer/BackgroundImageContainer";
import styles from "@/components/Panels/FeaturePanel/FeaturePanel.module.scss";
import model1 from "@/public/images/model_1.jpg";

function FeaturePanelPrimary() {
  return (
    <div className={styles.feature_panel_primary}>
      <BackgroundImageContainer
        alt="model with a fierce, poised presence"
        imageSrc={model1.src}
        bgPosition={["top", "center"]}
      >
        <h1>Heyo</h1>
      </BackgroundImageContainer>
    </div>
  );
}

export default FeaturePanelPrimary;
