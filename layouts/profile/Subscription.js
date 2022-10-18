import {Button} from "../../components/Button";
import styles from "./Subscription.module.scss"

const Subscription = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subscription}>
            <h2 className={styles.header}>Месячная</h2>
            <p className={styles.period}>Действует до 18 ноября 2022 года</p>
            </div>
            <Button variant="ghost" className={styles.button}>Управлять</Button>
        </div>
    )
}

export default Subscription