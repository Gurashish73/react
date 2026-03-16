import styles from './Card.module.css';
function Card(props) {
  return (
    <div className={styles.cardStyle}>
      <h1>Welcome, {props.userName}!</h1>
    </div>
  );
}

export default Card;