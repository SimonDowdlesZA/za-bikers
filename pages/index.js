import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@components/Logo.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ZA Bikers</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow,noarchive" />
        <link rel="icon" type="image/png" href="images/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="ZA Bikers" />
        <link rel="manifest" href="images/site.webmanifest" />
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
