import Image from 'next/image'
import styles from '../styles/Loader.module.scss'

function Loader() {
  return (
    <div>
      <Image
        className={styles.loader}
        src="/images/loader.jpg"
        alt="loader"
        width='100'
        height='100'
      // style={styles.element}
      />
    </div>
  );
}

export default Loader;