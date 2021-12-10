import Head from 'next/head'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image';

const name = 'Lungelo Dlamini'
const designation = 'SovTech Grad Programme portfolio | Computer Science Graduate'
export const siteTitle = 'Lungelo Dlamini'

export default function Layout({children, home}){
    return(
        <div className = {styles.container}>
            <Head>
                <link rel="icon" href="/favico.ico"/>
                <meta
                    name="description"
                    content="Portfolio website for Lungelo Dlamini|Computer Science graduate"
                />
                <meta name="og:title" content={siteTitle}/>
            </Head>
            <header className={styles.header}>
                        <Image
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            width="180%" 
                            height="200%" 
                            alt={name}
                        />
                        <h1 className={styles.heading2Xl}>{name}</h1>
                        <h4 className={styles.graymatter}>{designation}</h4>  
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>Back To Home</a>
                    </Link>

                </div>
            )}
        </div>
    )
}