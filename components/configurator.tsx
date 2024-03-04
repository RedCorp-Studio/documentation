// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './configurator.module.css'

const Configurator = () => {
  const [language, setLanguage] = useState('en')
  const [multichar, setMultichar] = useState(false)
  const [currency, setCurrency] = useState('$')

  const changeLanguage = (e: any) => {
    setLanguage(e.target.value)
  }

  const changeMultichar = () => {
    setMultichar(!multichar)
  }

  const changeCurrency = (e: any) => {
    setCurrency(e.target.value)
  }

  return (
    <>
      <div className={styles.configurator}>
        <h2>Global configuration</h2>
        Language : <input className={styles.input} type="text" value={language} onChange={changeLanguage} maxLength={2}></input><br></br>
        Multichar : <input className={styles.input} checked={multichar} type="checkbox" onChange={changeMultichar}></input><br></br>
        Currency : <input className={styles.input} type="text" value={currency} onChange={changeCurrency} maxLength={1}></input><br></br>
        <br></br>
        <pre className={styles.code}>
          Config = {"{}"}<br></br>
          <br></br>
          Config.Language = '{language}'<br></br>
          Config.Multichar = {multichar.toString()}<br></br>
          Config.Currency = '{currency}'<br></br>
          <br></br>
          Config.Permissions = {"{"}<br></br>
            &nbsp;&nbsp;admin = {"{}"}<br></br>
          {"}"}
        </pre>
      </div>
    </>
  )
}



export default Configurator;