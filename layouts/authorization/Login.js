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
              <Button variant='contained' size='small' className={styles.button}>Регистрация</Button>
              <p className={styles.question}>У вас уже есть аккаунт? <span><Link href='/'><a className={styles.enterLink}>Войти</a></Link></span></p>
          </form>
       </div>
   )
}

export default Login