'use client';
 
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.scss';
import Link from 'next/link';

type NavLink = {
  label: string;
  href: string;
};

type TNavProps = {
  navLinks: NavLink[];
};

const NavBar = ({ navLinks }: TNavProps) => {
  const pathname = usePathname();

  return (
    <div className={styles.navBar}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={isActive ? styles.navBarLinkActive : styles.navBarLink}
            href={link.href}
            key={link.label}
          > 
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export { NavBar };