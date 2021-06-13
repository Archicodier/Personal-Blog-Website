import Link from 'next/link'
import { GetStaticProps } from 'next'
import utilStyles from '../../styles/utils.module.css'
import blogStyles from '../../styles/blog.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Date from '../../components/date'

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
    <div className={blogStyles.container}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
        <div className={blogStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </section>
    </div>

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