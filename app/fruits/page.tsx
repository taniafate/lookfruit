import { TFruitType } from '@/lib/types/types';
import { FruitsBar } from '../components/FruitsBar/FruitsBar';
import { FruitsMainBlock } from '../components/FruitsMainBlock/FruitsMainBlock';
import styles from './Fruits.module.scss';
import { Metadata } from "next";

async function getData(): Promise<TFruitType[]> {
  const response = await fetch('https://www.fruityvice.com/api/fruit/all',
  {
    next: {
      revalidate: 86400,
    },
  });

  return response.json();
}

export const metadata: Metadata = {
  title: "Fruits | Next App",
};

export default async function Fruits() {
  const fruits = await getData();

  return (
    <div className={styles.fruitsContainer}>
      <FruitsMainBlock fruits={fruits}/>
      <FruitsBar />
    </div>
  );
}
