import Link from 'next/link';
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <>
    <div>
      <nav>
        <Link href='/about'>
          About
        </Link>
        {' | '}
        <Link href='/projects'>
          Projects
        </Link>
        {' | '}
        <Link href='/blog/posts'>
          Blog
        </Link>
        </nav>
    </div>

    </>
  );
};
