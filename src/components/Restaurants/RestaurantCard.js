import CardButton from "./CardButton";
import styles from "./RestaurantCard.module.css";

const RestaurantCard = ({
  name,
  street,
  postal,
  city,
  country,
  phone,
  navigate,
  imageUrl,
}) => {
  return (
    <div className={styles["restaurant-card"]}>
      <div className={styles["card-info"]}>
        <h3>{name}</h3>
        <br></br>
        <p>{street}</p>
        <p>
          {postal} {city}
        </p>
        <p>
          <strong>{country}</strong>
        </p>
        <p>
          Phone:{" "}
          <a className={styles["phone-link"]} href={`tel:${phone}`}>
            {phone}
          </a>
        </p>
        <CardButton text="Go there" navigate={navigate} />
      </div>

      <img src={imageUrl} alt="Restaurant" />
    </div>
  );
};

export default RestaurantCard;
