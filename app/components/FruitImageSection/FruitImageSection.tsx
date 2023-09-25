import styles from './FruitImageSection.module.scss';
import Image from 'next/image';
import ImageMain from '../../../public/ImageMain.png';

const FruitImageSection = () => {
  return (
    <Image
      src={ImageMain}
      width={270}
      height={360}
      className={styles.fruitImageSection}
      alt='Picture of the author'
    />
  );
};

export { FruitImageSection };