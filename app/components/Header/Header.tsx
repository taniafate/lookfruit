import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import styles from './Header.module.scss';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Fruits', href: '/fruits' },
  { label: 'About', href: '/about' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar navLinks={navItems} />
      <SocialMedia />
    </header>
  );
};

export { Header };