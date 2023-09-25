import styles from './SideBar.module.scss';
import AppStoreIcon from '../../../public/icons/AppStore.svg';
import GooglePlayIcon from '../../../public/icons/GooglePlay.svg';



const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <p className={styles.sideBarText}>Download our app</p>
      <button className={styles.sideBarButton}><AppStoreIcon /></button>
      <button className={styles.sideBarButton}><GooglePlayIcon /></button>
      <p className={styles.sideBarText}>...and get bonuses</p>
    </aside>
  );
};

export { SideBar };