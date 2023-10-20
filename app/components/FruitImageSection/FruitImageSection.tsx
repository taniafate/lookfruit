import styles from './FruitImageSection.module.scss';
import Image from 'next/image';
import ImageMainMob from '../../../public/ImageMainMob.png';
import ImageMainDesk from '../../../public/ImageMainDesk.png';

const FruitImageSection = () => {
  return (
    <>
      <Image
        src={ImageMainDesk}
        width={340}
        height={304}
        className={styles.fruitImageSectionDesk}
        alt='Picture of the author'
      />
      <Image
        src={ImageMainMob}
        width={340}
        height={304}
        className={styles.fruitImageSectionMob}
        alt='Picture of the author'
      />
    </>
  );
};

export { FruitImageSection };