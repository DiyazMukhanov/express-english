import {Button} from "../../components/Button"
import Link from "next/link"
import styles from "./Registration.module.scss"


const Login = () => {
   return (
       <div className={styles.container}>
          <form className={styles.form}>
              <p className={styles.paragraph}>Вход</p>
              <div className={styles.formBlock}><label className={styles.label}>Email</label>
                  <input placeholder='Укажите ваш почтовый адрес' className={styles.input}></input></div>
              <div className={styles.formBlock}><label className={styles.label}>Пароль</label>
                  <input placeholder='Введите пароль' className={styles.input}></input></div>
              <Button variant='contained' size='small' className={styles.button}>Войти</Button>
              <p className={styles.question}>У вас еще нет аккуанта? <span><Link href='/authorization/registration'><a className={styles.enterLink}>Регистрация</a></Link></span></p>
          </form>
       </div>
   )
}

export default Login