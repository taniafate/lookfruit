'use client';

import styles from './FruitsBar.module.scss';
import FruitImg from '../../../public/FruitImg.svg';
import FruitImgBlur1 from '../../../public/FruitImgBlur1.svg';
import FruitImgBlur2 from '../../../public/FruitImgBlur2.svg';
import FruitImgBlur3 from '../../../public/FruitImgBlur3.svg';
import FruitImgBlur4 from '../../../public/FruitImgBlur4.svg';
import { motion } from 'framer-motion';

const FruitsBar = () => {
  return (
    <aside className={styles.fruitsBar}>
      <div className={styles.fruitsBarImgUp}>
        <FruitImgBlur1 />
        <FruitImgBlur2 />
      </div>
      <p className={styles.fruitsBarText}>Drag me!</p>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={styles.fruitsBarImg}
        drag
        dragConstraints={{
          top: -20,
          left: -20,
          right: 20,
          bottom: 20,
        }}
      >
        <FruitImg />
      </motion.div>
      <div className={styles.fruitsBarImgDown}>
        <FruitImgBlur4 />
        <FruitImgBlur3 />
      </div>
    </aside>
  );
};

export { FruitsBar };