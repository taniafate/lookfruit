'use client';

import { FruitParamsCard } from '../FruitParamsCard/FruitParamsCard';
import styles from './FruitParamsSection.module.scss';

const FruitParamsSection = () => {
  
  return (
    
    <div className={styles.fruitParamsSection}>
      <div className={styles.fruitParamsSectionHeader}>
        <h1 className={styles.fruitParamsSectionTitle}>Blueberry</h1>
      </div>
      <FruitParamsCard />
    </div>
  );
};

export { FruitParamsSection };