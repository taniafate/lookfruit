import { TFruitType } from '@/lib/types/types';
import styles from './FruitItem.module.scss';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';

const FruitItem = motion(forwardRef(({ fruit }: { fruit: TFruitType }, ref: ForwardedRef<HTMLDivElement>) => {

  return (
    <div className={styles.fruitItem} ref={ref}>
      <div className={styles.fruitItemName}>{fruit.name}</div>
      <div className={styles.fruitItemFamily}>{fruit.family}</div>
      <div className={styles.fruitItemParams}>
        <div className={styles.fruitItemNutritions}>Nutritions (per 100g):</div>
        <ul className={styles.fruitItemList}>
          <li className={styles.fruitItemPoint}>{`carbohydrates: ${fruit.nutritions.carbohydrates}g`}</li>
          <li className={styles.fruitItemPoint}>{`protein: ${fruit.nutritions.protein}g`}</li>
          <li className={styles.fruitItemPoint}>{`fat: ${fruit.nutritions.fat}g`}</li>
          <li className={styles.fruitItemPoint}>{`calories: ${fruit.nutritions.calories}g`}</li>
          <li className={styles.fruitItemPoint}>{`sugar: ${fruit.nutritions.sugar}g`}</li>
        </ul>
      </div>
    </div>
  );
}));

export { FruitItem };