import { motion } from 'framer-motion';
import styles from './AnimationFrame.module.scss';
import FrameImg from '../../../public/FrameImg.svg';

const AnimationFrame = () => (
  <motion.div
    className={styles.animationFrame}
    animate={{
      scale: [1, 1.2, 1.2, 1, 1],
      rotate: [0, 0, 20, 20, 0],
    }}
  >
    <FrameImg />
  </motion.div>
);

export { AnimationFrame };