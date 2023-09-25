'use client';

import styles from './FruitsMainBlock.module.scss';
import { TFruitType } from '@/lib/types/types';
import { FruitItem } from '../FruitItem/FruitItem';
import { useEffect, useState } from 'react';
import { SortButton } from '../SortButton/SortButton';

const FruitsMainBlock = ({fruits}: {fruits: TFruitType[]}) => {
  const [data, setData] = useState<TFruitType[]>(fruits);

  const clickHandlerCarbohydrates = () => {
    const sorted = [...fruits].sort((a, b) => b.nutritions.carbohydrates - a.nutritions.carbohydrates);
    setData(sorted);
  };
  const clickHandlerProtein = () => {
    const sorted = [...fruits].sort((a, b) => b.nutritions.protein - a.nutritions.protein);
    setData(sorted);
  };
  const clickHandlerFat = () => {
    const sorted = [...fruits].sort((a, b) => b.nutritions.fat - a.nutritions.fat);
    setData(sorted);
  };
  const clickHandlerCalories = () => {
    const sorted = [...fruits].sort((a, b) => b.nutritions.calories - a.nutritions.calories);
    setData(sorted);
  };
  const clickHandlerSugar = () => {
    const sorted = [...fruits].sort((a, b) => b.nutritions.sugar - a.nutritions.sugar);
    setData(sorted);
  };

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div className={styles.fruitsMainBlock}>
      <div className={styles.fruitsMainBlockFilter}>
        <div className={styles.filterTitle}><span className={styles.filterName}>Sorting</span></div>
        <SortButton
          label='carbohydrates'
          onClick={clickHandlerCarbohydrates}
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.06,
            transition: {type: "spring",
            duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }} />
        <SortButton initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.06,
            transition: {type: "spring",
            duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }} label='protein' onClick={clickHandlerProtein} />
        <SortButton initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.06,
            transition: {type: "spring",
            duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }} label='fat' onClick={clickHandlerFat} />
        <SortButton initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.06,
            transition: {type: "spring",
            duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }} label='calories' onClick={clickHandlerCalories} />
        <SortButton initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.06,
            transition: {type: "spring",
            duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }} label='sugar' onClick={clickHandlerSugar} />
      </div>
        {data && data.map((fruit: TFruitType) => (
        <FruitItem
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
            layout
            fruit={fruit}
            key={fruit.id}
        />))}
    </div>
  );
};

export { FruitsMainBlock };