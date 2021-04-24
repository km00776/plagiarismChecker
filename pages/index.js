import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plagiarism Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <footer className={styles.footer}>
      
      </footer> */}
    </div>
  )
}
