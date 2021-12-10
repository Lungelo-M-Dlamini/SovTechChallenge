import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

function aboutMe(){
  let component = []
  let about = [
    'Talk about yourself lungs',
    'More about yourself lungs'
  ]
  for(let i=0; i<about.length; i++){
    component.push(<p>{about[i]}</p>)
  }
  return component
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
        <h2 className={utilStyles.headingLg}>About</h2>
        <div className={utilStyles.about}>
          {aboutMe()}
        </div>
      </section>
    </Layout>
  )
}
