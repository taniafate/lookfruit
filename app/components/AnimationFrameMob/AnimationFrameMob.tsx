import { motion } from 'framer-motion';
import styles from './AnimationFrameMob.module.scss';
import FrameImgMob from '../../../public/FrameImgMob.svg';

const AnimationFrameMob = () => (
  <motion.div
    className={styles.animationFrameMob}
    animate={{
      scale: [1, 1.2, 1.2, 1, 1],
      rotate: [0, 0, 20, 20, 0],
    }}
  >
    <FrameImgMob />
  </motion.div>
);

export { AnimationFrameMob };