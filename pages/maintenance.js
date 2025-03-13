import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@components/Logo.module.css'

export default function Maintenance() {
  return (
    <div className="container">
      <Head>
        <title>ZA Bikers</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow,noarchive" />
      </Head>

      <main>
        <img src="images/gear.svg" alt="ZA Bikers is undergoing maintenance" className={styles.logo} />
        <Header title="ZA Bikers is Changing Gears" />
        <p className="description">
          We're undergoing some maintenance and will be back online as soon as possible
        </p>
      </main>

      <Footer />
    </div>
  )
}
