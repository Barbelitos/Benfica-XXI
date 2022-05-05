import RestaurantCard from "./RestaurantCard";
import { Grid } from "@mui/material";

import classes from "./RestaurantsContainer.module.css";

const RestaurantsContainer = ({ restaurants }) => {
  const renderRestaurants = () => {
    return restaurants.map((restaurant) => (
      <RestaurantCard
        key={restaurant.id}
        name={restaurant.name}
        cuisine={restaurant.cuisine}
        street={restaurant.street}
        postal={restaurant.postal}
        city={restaurant.city}
        country={restaurant.country}
        phone={restaurant.phone}
        imageUrl={restaurant.imageUrl}
        navigate={restaurant.navigate}
      />
    ));
  };

  return (
    <Grid
      container
      justifyContent="center"
      className={classes["restaurants-container"]}
    >
      {restaurants.length > 0 ? (
        renderRestaurants()
      ) : (
        <p>
          No restaurants found. Please try again with different search terms.
        </p>
      )}
    </Grid>
  );
};

export default RestaurantsContainer;
