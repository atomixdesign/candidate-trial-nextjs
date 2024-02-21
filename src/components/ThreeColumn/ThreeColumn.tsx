import React from 'react'
import styles from './ThreeColumn.module.scss'
import FirstColumn from './Columns/FirstColumn'
import ThirdColumn from './Columns/ThirdColumn'
import SecondColumn from './Columns/SecondColumn'

const ThreeColumn = () => {
    return (
        <div className={styles.threeColumnContainer}>
            <div className={styles.heading}>
                Three column with image
            </div>
            <section>
                <div className={styles.row}>
                    <FirstColumn className={`${styles.column} ${styles.first_col}`} />
                    <SecondColumn className={`${styles.column} ${styles.second_col}`} />
                    <ThirdColumn className={`${styles.column} ${styles.third_col}`} />
                </div>
            </section>
        </div>
    )
}

export default ThreeColumn