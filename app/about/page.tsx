import { AboutMainBlock } from '../components/AboutMainBlock/AboutMainBlock';
import styles from './About.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Next App",
};

export default function About() {

  return (
    <div className={styles.aboutContainer}>
      <AboutMainBlock />
      <div className={styles.aboutPagePic}>
        <span className={styles.aboutPagePicSpan}>Have a good time :)</span>
      </div>
    </div>
  );
}
