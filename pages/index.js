import Head from 'next/head'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Skills from '../components/skills'
import References from '../components/skills'
import {getSkillsData} from '../lib/loadimages'

export async function getStaticProps(){
  const allSkillImages = getSkillsData()
  return{
    props: {
      allSkillImages
    }
  }
}


function aboutMe(){
  let component = []
  let about = [
    'My name is Lungelo Dlamini, I am a Computer Science gradute from Varsity College 2021.',
    'I enjoy doing developing software, more back-end than front-end actually but Im looking forward to improving in both areas of development',
    'I want to attend be part of the SovTech grad programme to be able to produce the kind of applications the organisation develops',
    'I know that the skills that I need can be found at this organisation starting from the grad programme to help me become an enterprise developer'
  ]
  for(let i=0; i<about.length; i++){
    component.push(<p>{about[i]}</p>)
  }
  return component
}

export default function Home({allSkillImages}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
          <h2 className={utilStyles.headingLg}> About </h2>
          <div className={utilStyles.about}> 
            {aboutMe()}
          </div>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
          <h2 className={utilStyles.headingLg}> Skills </h2>
            <Skills allSkillImages={allSkillImages} />
        </section>
    </Layout>
  )
}
