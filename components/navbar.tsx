import Link from 'next/link';
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <>
    <div>
      <nav className={styles.nav}>
        <div>
          <Link href='/'>
            CALVIN HU
          </Link>
          {' | '}
          <Link href='/projects'>
           PROJECTS
          </Link>
          {' | '}
          <Link href='/blog/posts'>
            WRITING
         </Link>
         </div>
        </nav>
    </div>

    </>
  );
};
