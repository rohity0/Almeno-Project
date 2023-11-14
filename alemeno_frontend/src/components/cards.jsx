/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "../CSS/dashboard.module.css";

export const Card = ({ item, userId }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.nameDash}>{item?.name}</div>

        <div className={styles.nameDash}>{item?.instructor}</div>
        <button className={styles.buttonDetail}>
          <Link to={!userId ? `/detail/${item._id}` : `/student/${item._id}`}>
            More Detail
          </Link>
        </button>
      </div>
    </>
  );
};
