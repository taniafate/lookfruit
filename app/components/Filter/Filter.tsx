'use client';

import { SortButton } from '../SortButton/SortButton';
import styles from './Filter.module.scss';

const Filter = () => {
  const fruitItems = ['Carbohydrates', 'Protein', 'Fat', 'Calories', 'Sugar'];
  
  return (
    <div className={styles.filterBox}>
      {fruitItems.map((label) => {

      return (
        <SortButton label={label}
          key={label}
        />
      );})}
    </div>
  );
};

export { Filter };