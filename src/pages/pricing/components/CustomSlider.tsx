import styles from "./styles.module.scss";
import { Slider } from "@material-ui/core";

const CustomSlider = ({ ...props }) => (
  <>
    <div className={styles.CustomSlider}>
      <Slider {...props} />
    </div>
  </>
);

export default CustomSlider;
