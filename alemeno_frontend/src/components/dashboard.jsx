import styles from "../CSS/dashboard.module.css";
import { Card } from "./cards";

export const Dashboard = ({ data, userId }) => {
  return (
    <div className={styles.dashboard}>
      <h2>Course List</h2>

      {data?.map((item) => {
        return <Card key={item._id} item={item} userId={userId} />;
      })}
    </div>
  );
};
