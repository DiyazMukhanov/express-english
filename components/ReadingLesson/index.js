import styles from "./ReadingLesson.module.scss"
import audio from "../../layouts/lessons/one/Audio"
import {Button} from "../Button";
import {useState} from "react";
import {useRouter} from "next/router";


const ReadingLesson = ({lessonNumber, audioString, englishText, ruText}) => {
    const [textValue, setTextValue] = useState('')

    const inputValueHandler = (event) => {
        setTextValue(event.target.value)
    }

    const router = useRouter()

    const handleRouting = (url) => {
        return function(e) {
            e.preventDefault()
            router.push(url)
        }
    }

    return <div>
        <h2 className={styles.heading}>Прослушайте запись и прочитайте текст</h2>
        <div className={styles.audioContainer}>
            <audio
                controls
                src={audioString}
                className={styles.audio}
            >
            </audio>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.text}>
                {englishText}
                <br/>
                <br/>
                {ruText}
            </div>
        </div>
        <h2 className={styles.heading}>Напишите общий смысл текста на русском языке и нажмите на кнопку "Отправить"</h2>
        <div className={styles.inputContainer}>
        <textarea className={styles.input} onChange={inputValueHandler}/>
        <Button variant='outlined' className={styles.sendBtn}>Отправить</Button>
        </div>

        <div className={styles.btnContainer}>
            <Button
                className={styles.buttonNext}
                onClick={handleRouting(`/lessons/${lessonNumber}/writing`)}
            >
                Следующий раздел
            </Button>
        </div>
    </div>
}

export default ReadingLesson