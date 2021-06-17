import Link from 'next/link';
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <>
    <div>
      <nav className={styles.nav}>
        <div>
          <div className={styles.block_left}>
            <Link href='/'>
              <a className={styles.link_main}>CALVIN HU</a>
            </Link>
          </div>
          <div className={styles.block_right}>
            <Link href='/projects'>
              <a className={styles.link_sub}>PROJECTS</a>
            </Link>
            <Link href='/blog/posts'>
             <a className={styles.link_sub}>WRITING</a>
            </Link>
          </div>
         </div>
        </nav>
    </div>

    </>
  );
};
