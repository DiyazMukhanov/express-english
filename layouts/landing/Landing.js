import styles from './Landing.module.scss'
import {Button} from "../../components/Button"
import { useRouter } from 'next/router'

const Landing = () => {
    const router = useRouter()

    const handleRouting = (url) => {
        return function(e) {
            e.preventDefault()
            router.push(url)
        }
    }

    return (
        <div className={styles.container}>
           <div className={styles.top}>
               <Button variant='outlined' className={styles.buttonLeft} onClick={handleRouting('authorization/login')}>Войти</Button>
               <Button variant='contained' className={styles.buttonRight} onClick={handleRouting('/authorization/registration')}>Регистрация</Button>
           </div>
            <div className={styles.middle}>
                <h1 className={styles.heading}>Английский за 30 уроков!</h1>
            </div>
            <div className={styles.bottom}>
                <Button variant='contained' className={styles.buttonBottom} onClick={handleRouting('/lessons/intro')}>Пройти курс</Button>
            </div>
        </div>
    )
}

export default Landing

//https://nicetalkingwithyou.com/mp3-downloads/mp3-downloads-text1/