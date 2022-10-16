import {Button} from "../components/Button"
import styles from "./test.module.scss"
import classNames from "classnames"

export default function Test() {
    return (
        <div>
            <Button variant='contained' className={classNames(styles.button, styles.wide)}>Contained</Button>
            <Button variant='outlined' className={classNames(styles.button, styles.normalWidth)}>Outlined</Button>
        </div>
    )
}