import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Loader from '../common/loader'


export default function Home() {
  return (
    <div className={styles.loader}>
      <Loader />
    </div>
  )
}
