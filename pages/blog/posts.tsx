import Link from 'next/link'
import { GetStaticProps } from 'next'
import utilStyles from '../../styles/utils.module.css'
import blogStyles from '../../styles/blog.module.css'
import styles from '../../components/layout.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Date from '../../components/date'
import { Navbar } from '../../components/navbar'

export default function Posts({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  } []
}) {
  return (
    <>
    <Navbar />
    <div className={blogStyles.container}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <header className={styles.header}>
           <div className={utilStyles.headingXl}>Blog</div>
           <div className={utilStyles.headingLg}>Writing about Tech and Beyond</div>
        </header>
        <main className={styles.main}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
             <li className={utilStyles.listItem} key={id}>
               <Link href={`/blog/${id}`}>
                 <a>{title}</a>
                </Link>
               <br />
               <small className={utilStyles.lightText}>
                 <Date dateString={date} />
                </small>
              </li>
           ))}
         </ul>
        </main>
      </section>
    </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}