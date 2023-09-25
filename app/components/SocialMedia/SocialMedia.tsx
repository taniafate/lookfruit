import styles from './SocialMedia.module.scss';
import GitHubIcon from '../../../public/icons/GitHub.svg';

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <button className={styles.socialMediaButton}><GitHubIcon /></button>
    </div>
  );
};

export { SocialMedia };