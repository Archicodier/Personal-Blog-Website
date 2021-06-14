import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { Navbar } from '../components/navbar'

export default function Home({
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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>About me</h3>
        <p>I'm <strong>Calvin Hu</strong>. I am a software engineer adept at designing and developing scalable, high-performance full-stack web and mobile applications. I'm very passionate about learning and applying new technologies along with my critical thinking to explore and solve real-world problems. I spent a few years worked as an Architecture Designer, but the rapidly growing software technologies inspired me to be a Full Stack Software Engineer.</p>
      </section>
    </Layout>
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
