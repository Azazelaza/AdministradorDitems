import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../../styles/views/dashboard/Menu.module.scss'

export default function Menu() {
  return (
    <div className={styles.menuItems}>
      <FontAwesomeIcon icon={faPersonDigging} />
      <div>
        Se esta trabajando en esta vista
      </div>
    </div>
  )
}
