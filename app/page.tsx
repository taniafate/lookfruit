import styles from './page.module.scss';
import { SideBar } from './components/SideBar/SideBar';
import { FruitParamsSection } from './components/FruitParamsSection/FruitParamsSection';
import { FruitImageSection } from './components/FruitImageSection/FruitImageSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | Next App",
};

export default function Home() {

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeMainBlock}>
        <FruitImageSection />
        <FruitParamsSection />
      </div>
      <SideBar />  
    </div>
  );
}
