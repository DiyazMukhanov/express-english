import {Button} from "../../components/Button";
import styles from "./NoSubscription.module.scss"

const Subscription = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subscription}>

            <p className={styles.period}>У вас еще нет подписки</p>
            </div>
            <Button variant="ghost" className={styles.button}>Приобрести</Button>
        </div>
    )
}

export default Subscription