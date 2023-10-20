'use client';

import { AnimationFrame } from '../AnimationFrame/AnimationFrame';
import { AnimationFrameMob } from '../AnimationFrameMob/AnimationFrameMob';
import styles from './AboutMainBlock.module.scss';
import { useEffect } from 'react';

const AboutMainBlock = () => {
  
  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className={styles.aboutMainBlock}>
        <span className={styles.aboutMainBlockSpanOne}>***</span>
        <div className={styles.aboutMainBlockText}>
          <p className={styles.aboutMainBlockTextPart}>LOOKFRUIT - my second pet-project and the first application made on the Next.js framework.</p>
          <p className={styles.aboutMainBlockTextPart}>I also used the Framer Motion animation library for the first time.</p>
          <p className={styles.aboutMainBlockTextPart}>The design of this app was developed by me using Figma (photo by Nica Cn on Unsplash).</p>
          <p className={styles.aboutMainBlockTextPart}>Data for fruits provided by Fruityvice.</p>
        </div>
        <span className={styles.aboutMainBlockSpanTwo}>TF</span>
      </div>
      <AnimationFrame />
      <AnimationFrameMob />
    </>
  );
};

export { AboutMainBlock };