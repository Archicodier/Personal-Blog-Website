import { Navbar } from '../../components/navbar'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'
import projectsStyles from '../../styles/projects.module.css'
import Lists from '../../projects/lists'

export default function Projects() {
  return (
    <>
    <Navbar />
    <div className={projectsStyles.container}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <header className={styles.header}>
          <div className={utilStyles.headingXl}>Projects</div>
          <div className={utilStyles.headingLg}>Full Stack Web Projects</div>
        </header>
        <main className={styles.main}>
          <div className={projectsStyles.section}>
           <img className={projectsStyles.image} src={Lists[0].imageURL as string} />
           <div className={projectsStyles.division}>
            <a className={projectsStyles.headingLg} href={Lists[0].url as string}>{Lists[0].name as string}</a>
             <div className={projectsStyles.a}>
              <a className={projectsStyles.headingSsm} href={Lists[0].url as string}>github/healthy-food-inc</a>
             </div>
             <div className={projectsStyles.headingSm}>{Lists[0].summary as string}</div>
            </div>
         </div>
          <div className={projectsStyles.section}>
            <img className={projectsStyles.image} src={Lists[1].imageURL as string} />
            <div className={projectsStyles.division}>
           <a className={projectsStyles.headingLg} href={Lists[1].url as string}>{Lists[1].name as string}</a>
            <div className={projectsStyles.a}>
              <a className={projectsStyles.headingSsm} href={Lists[1].url as string}>github/project-catwalk</a>
             </div>
             <div className={projectsStyles.headingSm}>{Lists[1].summary as string}</div>
            </div>
          </div>
          <div className={projectsStyles.section}>
            <img className={projectsStyles.image} src={Lists[2].imageURL as string} />
            <div className={projectsStyles.division}>
            <a className={projectsStyles.headingLg} href={Lists[2].url as string}>{Lists[2].name as string}</a>
            <div className={projectsStyles.a}>
             <a className={projectsStyles.headingSsm} href={Lists[2].url as string}>github/project-catwalk</a>
            </div>
             <div className={projectsStyles.headingSm}>{Lists[2].summary as string}</div>
            </div>
          </div>
        </main>
      </section>
    </div>
    </>
  )
}
