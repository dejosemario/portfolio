import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Loader from '../common/loader'
import { useState } from 'react'


export default function Home() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }
    , 6000)

  return (
    <div className={styles.loader} style={loading ? { display: 'flex' } : { display: 'none' }}>
      <Loader />
    </div>
  )
}
