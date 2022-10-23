import styles from './AudioLesson.module.scss'
import audio from "../../layouts/lessons/one/Audio"
import {Button} from "../Button"
import {useState, useRef} from "react";
import classNames from "classnames";
import {useRouter} from "next/router";


const AudioLesson = ({lessonNumber, audioString, englisText, ruText}) => {

    const [textIsShown, setTextIsShown] = useState(false)

    const router = useRouter()

    const handleRouting = (url) => {
        return function(e) {
            e.preventDefault()
            router.push(url)
        }
    }

    const showTextHandler = () => {
        setTextIsShown(!textIsShown)
    }

    return (
        <div className={styles.container}>
        <h2 className={styles.heading}>Прослушайте запись и ответьте на вопросы</h2>
            <div className={styles.audioContainer}>
        <audio
            controls
            src={audioString}
            className={styles.audio}
        >
        </audio>
            </div>
            {textIsShown &&
                <div className={styles.textContainer}>
            <div className={styles.text}>
                {englisText}
                <br/>
                <br/>
                {ruText}
            </div>
                </div>}
            <Button
                variant='outlined'
                className={styles.button}
                onClick={showTextHandler}
            >
                {!textIsShown ? "Показать текст" : "Скрыть текст" }
            </Button>

            <div className={styles.btnContainer}>
                <Button
                    className={styles.buttonNext}
                    onClick={handleRouting(`/lessons/${lessonNumber}/reading`)}
                >
                    Следующий раздел
                </Button>
            </div>
        </div>)
}

export default AudioLesson