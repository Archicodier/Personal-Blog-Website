import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Navbar } from '../components/navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.main}>
        <div className={utilStyles.clearfix}>
          <h3>About me</h3>
          <p className={utilStyles.description} >I am a software engineer adept at designing and developing scalable, high-performance full-stack web and mobile applications. I'm very passionate about learning and applying new technologies along with my critical thinking to explore and solve real-world problems. I spent a few years worked as an Architecture Designer, but the rapidly growing software technologies inspired me to be a Full Stack Software Engineer.</p>
        </div>
        <div className={utilStyles.clearfix}>
          <h3>Contact</h3>
          <div>
            <a href="https://www.calvinchenhupro@gmail.com"><span>Email</span></a>
            {' | '}
            <a href="https://www.linkedin.com/in/calvin-chen-hu-63243729/"><span>Linkedin</span></a>
            {' | '}
            <a href="https://github.com/chu017"><span>Github</span></a>
            {' | '}
            <a href="https://twitter.com/"><span>Twitter</span></a>
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}
