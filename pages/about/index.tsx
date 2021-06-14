import Link from 'next/link'
import { GetStaticProps } from 'next'
import utilStyles from '../../styles/utils.module.css'
import blogStyles from '../../styles/blog.module.css'

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
        <h2 className={utilStyles.headingLg}>About</h2>
        <div className={blogStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </section>
    </div>

  )
}
