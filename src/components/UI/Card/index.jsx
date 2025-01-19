import Styles from "@/components/UI/Card/index.module.scss";
import { Icon, Image } from "semantic-ui-react";

const Card = () => {
  return (
    <div className={Styles.card}>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        fluid
        rounded
      />
      <div className={Styles.card__content}>
        <div className={Styles.card__between}>
          <span className={Styles.card__year}>2024</span>
          <span className={Styles.card__rating}>
            <Icon name="star" />
            7.3
          </span>
        </div>
        <strong>Test Title</strong>
      </div>
    </div>
  );
};

export default Card;
