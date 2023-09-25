import styles from './FruitParamsCard.module.scss';

const FruitParamsCard = () => {
  
  return (
    <div className={styles.fruitParamsCard}>
      <h2 className={styles.fruitParamsCardTitle}>Features:</h2>
      <p className={styles.fruitParamsCardText}>Supports immunity</p>
      <p className={styles.fruitParamsCardText}>Reduces the risk of developing heart disease</p>
      <p className={styles.fruitParamsCardText}>Can improve the work of the gastrointestinal tract</p>
      <p className={styles.fruitParamsCardText}>Helps strengthen bones</p>
      <p className={styles.fruitParamsCardText}>Reduces blood sugar levels</p>
      <p className={styles.fruitParamsCardText}>Has a beneficial effect on brain health</p>
      <p className={styles.fruitParamsCardText}>There are contraindications. Can cause allergies </p>
    </div>
  );
};

export { FruitParamsCard };