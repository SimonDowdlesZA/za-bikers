import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="images/logo-zabikers.jpg" alt="ZA Bikers" className={styles.logo} />
      </footer>
    </>
  )
}
