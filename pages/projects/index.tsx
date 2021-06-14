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
          <img className={projectsStyles.image} src={Lists.imageURL as string} />
          <div>
           <div className={projectsStyles.headingLg}>{Lists.name as string}</div>
           <div className={projectsStyles.a}>
            <a className={projectsStyles.headingSsm} href={Lists.url as string}>github/healthy-food-inc</a>
           </div>
           <div className={projectsStyles.headingSm}>{Lists.summary as string}</div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
