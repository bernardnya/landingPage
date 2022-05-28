import React from 'react'

import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download the App
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}> 
          Get the app on Google store and Apple store
          </p>
        </div>
        <button className={`${styles.btnBlack} ${styles.whiteText}`}>
          Download Now
        </button>
        <div className={styles.flexCenter}>
          <img src={assets.scene} 
          alt="download" 
          className={styles.fullImg}/>
        </div>
      </div>
    </div>
  )
}

export default Download