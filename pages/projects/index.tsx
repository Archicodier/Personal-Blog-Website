import { Navbar } from '../../components/navbar'
import utilStyles from '../../styles/utils.module.css'
import projectsStyles from '../../styles/projects.module.css'
import Lists from '../../projects/lists'

export default function Projects() {
  return (
    <>
    <Navbar />
    <div className={projectsStyles.container}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
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
          <img className={projectsStyles.image} src={Lists[1].imageURL as string} />
          <div className={projectsStyles.division}>
          <a className={projectsStyles.headingLg} href={Lists[1].url as string}>{Lists[1].name as string}</a>
           <div className={projectsStyles.a}>
            <a className={projectsStyles.headingSsm} href={Lists[1].url as string}>github/project-catwalk</a>
           </div>
           <div className={projectsStyles.headingSm}>{Lists[1].summary as string}</div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
