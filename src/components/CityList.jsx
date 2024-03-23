import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return <div className={styles.cityList}>{cities.map(() => {})}</div>;
}

export default CityList;
