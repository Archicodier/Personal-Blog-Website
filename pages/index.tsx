import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Navbar } from '../components/navbar'
import { SocialIcon } from 'react-social-icons';

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
          <div className={utilStyles.icons}>
            <div className={utilStyles.icon}>
              <SocialIcon url="https://www.calvinchenhupro@gmail.com"/>
              <a className={utilStyles.font} href="https://www.calvinchenhupro@gmail.com"><span>Email</span></a>
            </div>
            <div className={utilStyles.icon}>
              <SocialIcon url="https://www.linkedin.com/in/calvin-chen-hu-63243729"/>
              <a className={utilStyles.font} href="https://www.linkedin.com/in/calvin-chen-hu-63243729"><span>Linkedin</span></a>
            </div>
            <div className={utilStyles.icon}>
              <SocialIcon url="https://github.com/chu017"/>
              <a className={utilStyles.font} href="https://github.com/chu017"><span>Github</span></a>
            </div>
            <div className={utilStyles.icon}>
              <SocialIcon url="https://twitter.com"/>
              <a className={utilStyles.font} href="https://twitter.com/"><span>Twitter</span></a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}
