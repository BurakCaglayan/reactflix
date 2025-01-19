import Styles from "@/components/UI/Card/index.module.scss";
import { Icon, Image } from "semantic-ui-react";

const Card = ({ data }) => {
  return (
    <div className={Styles.card}>
      <Image src={data.Poster} fluid rounded />
      <div className={Styles.card__content}>
        <div className={Styles.card__between}>
          <span className={Styles.card__year}>{data.Year}</span>
          <span className={Styles.card__rating}>
            <Icon name="star" />
            {data.imdbID}
          </span>
        </div>
        <strong>{data.Title}</strong>
      </div>
    </div>
  );
};

export default Card;
