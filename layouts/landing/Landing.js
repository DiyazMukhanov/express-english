import styles from './Landing.module.scss'
import {Button} from "../../components/Button";

const Landing = () => {
    return (
        <div className={styles.container}>
           <div className={styles.top}>
               <Button variant='outlined' className={styles.buttonLeft}>Войти</Button>
               <Button variant='contained' className={styles.buttonRight}>Регистрация</Button>
           </div>
            <div className={styles.middle}>
                <h1 className={styles.heading}>Быстрый курс английского языка</h1>
            </div>
            <div className={styles.bottom}>
                <Button variant='contained' className={styles.buttonBottom}>Пройти курс</Button>
            </div>
        </div>
    )
}

export default Landing