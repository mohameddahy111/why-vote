import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from '../styles/privatePage.module.css';
import Image from 'next/image';

const privatePage = () => {
  return (
    <div>
      <div className={styles.contaner}>
        <Image  src={'https://i.pinimg.com/564x/0d/44/ff/0d44ffa24e8f0cadeb1dc1ea72a89d8e.jpg'} 
        width = {400}
        height = {400}
        />
        <h1>
          please wait 24 hours for us approve this prospect.
        </h1>
      </div>
    </div>
  )
}

export default privatePage