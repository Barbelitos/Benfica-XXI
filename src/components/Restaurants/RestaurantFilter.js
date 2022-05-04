import FilterButton from "./FilterButton";
import styles from "./RestaurantFilter.module.css";

const RestaurantFilter = ({
  handleLisbonFilter,
  handlePortoFilter,
  handleClearFilter,
  handleOthersFilter,
}) => {
  return (
    <div className={styles.buttons_container}>
      <FilterButton text="Lisboa" handleFilter={handleLisbonFilter} />
      <FilterButton text="Porto" handleFilter={handlePortoFilter} />
      <FilterButton text="Outros locais" handleFilter={handleOthersFilter} />
      <FilterButton
        style={{
          background: "none",
          color: "rgb(196, 26, 26)",
          border: "3px solid rgb(196, 26, 26)",
        }}
        text="Limpar filtro"
        handleFilter={handleClearFilter}
      />
    </div>
  );
};

export default RestaurantFilter;
