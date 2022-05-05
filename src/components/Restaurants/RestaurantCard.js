import CardButton from "./CardButton";
import styles from "./RestaurantCard.module.css";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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
    <Card
      sx={{
        width: 350,
        maxHeight: 500,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      className={styles["restaurant-card"]}
    >
      <CardMedia component="img" image={imageUrl} alt="Restaurant" />

      <CardContent className={styles["card-info"]}>
        <Typography variant="h6">
          <strong>{name}</strong>
        </Typography>
        <br />
        <Typography variant="body2">{street}</Typography>
        <Typography variant="body2">
          {postal} {city}
        </Typography>
        <Typography variant="body2">
          <strong>{country}</strong>
        </Typography>
        <Typography variant="body2">
          Phone:{" "}
          <a className={styles["phone-link"]} href={`tel:${phone}`}>
            {phone}
          </a>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          width: "100%",
          height: "20%",
        }}
      >
        <CardButton text="Go there" navigate={navigate} />
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;
