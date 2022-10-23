import {Button} from "../../components/Button"
import Link from "next/link"
import styles from "./Registration.module.scss"


const Registration = () => {
   return (
       <div className={styles.container}>
          <form className={styles.form}>
              <p className={styles.paragraph}>Регистрация</p>
              <div className={styles.formBlock}><label className={styles.label}>Имя</label>
                  <input placeholder='Укажите ваше имя' className={styles.input}></input></div>
              <div className={styles.formBlock}><label className={styles.label}>Email</label>
                  <input placeholder='Укажите ваш почтовый адрес' className={styles.input}></input></div>
              <div className={styles.formBlock}><label className={styles.label}>Придумайте пароль</label>
                  <input placeholder='Придумайте пароль' className={styles.input}></input></div>
              <div className={styles.formBlock}><label className={styles.label}>Повторите пароль</label>
                  <input placeholder='Повторите пароль' className={styles.input}></input></div>
              <Button variant='contained' size='small' className={styles.button}>Регистрация</Button>
              <p className={styles.question}>У вас уже есть аккаунт? <span><Link href='/authorization/login'><a className={styles.enterLink}>Войти</a></Link></span></p>
          </form>
       </div>
   )
}

export default Registration