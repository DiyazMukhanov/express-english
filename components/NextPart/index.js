import styles from "../AudioLesson/AudioLesson.module.scss";
import {Button} from "../Button"
import {useRouter} from "next/router"


const NextPart = ({lessonNumber}) => {
    const router = useRouter()

    const handleRouting = (url) => {
        return function(e) {
            e.preventDefault()
            router.push(url)
        }
    }

    return <div className={styles.btnContainer}>
        <Button
            className={styles.buttonNext}
            onClick={handleRouting(`/lessons/${lessonNumber}/reading`)}
        >
            Следующий раздел
        </Button>
    </div>
}

export default NextPart