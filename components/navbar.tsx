import Link from 'next/link';
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <>
    <div>
      <nav>
        <Link href='/'>
          About
        </Link>
        {' | '}
        <Link href='/'>
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
