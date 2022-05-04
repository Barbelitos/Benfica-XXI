import styles from "./FilterButton.module.css";

const FilterButton = ({ text, handleFilter, style }) => {
  return (
    <button
      style={style}
      className={styles.filter_button}
      onClick={handleFilter}
    >
      {text}
    </button>
  );
};

export default FilterButton;
