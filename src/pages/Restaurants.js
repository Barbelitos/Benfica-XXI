import { useState, useEffect } from "react";

import Navbar from "../components/UI/Navbar";
import SearchBar from "../components/UI/SearchBar";
import RestaurantFilter from "../components/Restaurants/RestaurantFilter";
import RestaurantsContainer from "../components/Restaurants/RestaurantsContainer";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [hasFilter, setHasFilter] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(
        "https://benfica-xxi-default-rtdb.europe-west1.firebasedatabase.app/restaurants.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedRestaurants = [];

      for (const key in responseData) {
        loadedRestaurants.push({
          id: key,
          name: responseData[key].name,
          cuisine: responseData[key].cuisine,
          street: responseData[key].street,
          postal: responseData[key].postal,
          city: responseData[key].city,
          country: responseData[key].country,
          phone: responseData[key].tel,
          imageUrl: responseData[key].imageUrl,
          navigate: responseData[key].navigateUrl,
        });
      }

      setRestaurants(loadedRestaurants);
    };

    fetchRestaurants().catch((error) => {
      console.log(error.message);
    });
  }, []);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm !== "") {
      const filteredRestaurants = restaurants.filter((restaurant) => {
        return Object.values(restaurant)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredRestaurants);
      setHasFilter(false);
    } else {
      setSearchResults(restaurants);
    }
  };

  const lisbonRestaurants = restaurants.filter(
    (restaurant) => restaurant.city.toLowerCase() === "lisboa"
  );

  const portoRestaurants = restaurants.filter(
    (restaurant) => restaurant.city.toLowerCase() === "porto"
  );

  const otherRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.city.toLowerCase() !== "porto" &&
      restaurant.city.toLowerCase() !== "lisboa"
  );

  const handleLisbonFilter = () => {
    setHasFilter(true);
    setSearchResults(lisbonRestaurants);
    setSearchTerm("");
  };

  const handlePortoFilter = () => {
    setHasFilter(true);
    setSearchResults(portoRestaurants);
    setSearchTerm("");
  };

  const handleOthersFilter = () => {
    setHasFilter(true);
    setSearchResults(otherRestaurants);
    setSearchTerm("");
  };

  const handleClearFilter = () => {
    setHasFilter(false);
  };

  return (
    <>
      <Navbar />
      <SearchBar searchTerm={searchTerm} searchKeyword={searchHandler} />
      <RestaurantFilter
        handleLisbonFilter={handleLisbonFilter}
        handlePortoFilter={handlePortoFilter}
        handleOthersFilter={handleOthersFilter}
        handleClearFilter={handleClearFilter}
      />
      <RestaurantsContainer
        restaurants={
          searchTerm.length < 1 && hasFilter === false
            ? restaurants
            : searchResults
        }
      />
    </>
  );
};
export default Restaurants;
