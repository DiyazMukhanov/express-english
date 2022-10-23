import styles from './AudioLesson.module.scss'
import audio from "../../layouts/lessons/one/Audio"
import {Button} from "../Button"
import {useState, useRef} from "react";
import classNames from "classnames";
import {useRouter} from "next/router";


const AudioLesson = ({lessonNumber}) => {
    const firstWrongRef = useRef()
    const [textIsShown, setTextIsShown] = useState(false)
    const [clickedRight, setClickedRight] = useState(false)
    const [clickedFirstWrong, setClickedFirstWrong] = useState(false)
    const [clickedSecondWrong, setClickedSecondWrong] = useState(false)
    const [clickedThirdWrong, setClickedThirdWrong] = useState(false)

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

    // const classNames = classNames({
    //     [styles.right]:clickedRight,
    //     [styles.wrong]:!clickedRight
    // })

    const rightClick = () => {
        setClickedRight(true)
    }

    const wrongClickFirst = () => {
        setClickedFirstWrong(true)
    }

    const wrongClickSecond = () => {
        setClickedSecondWrong(true)
    }

    const wrongClickThird = () => {
        setClickedThirdWrong(true)
    }

    return (
        <div className={styles.container}>
        <h2 className={styles.heading}>Прослушайте запись и ответьте на вопросы</h2>
            <div className={styles.audioContainer}>
        <audio
            controls
            src={`/audio/${lessonNumber}.mp3`}
            className={styles.audio}
        >
        </audio>
            </div>
            {textIsShown &&
            <div className={styles.text}>
                Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.

                The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time.

                Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your reading skills at your own speed, whenever it's convenient for you.
            </div>}
            <Button
                variant='outlined'
                className={styles.button}
                onClick={showTextHandler}
            >
                {!textIsShown ? "Показать текст" : "Скрыть текст" }
            </Button>

            <div className={styles.test}>
                <div className={styles.answerContainer}>
                    <p onClick={wrongClickFirst} className={classNames({
                    [styles.wrong]:clickedFirstWrong}, styles.answer)}>This is wrong answer</p>

                    {clickedFirstWrong && <p className={styles.wrongText}>Неверный ответ</p>}
                </div>
                <div className={styles.answerContainer}><p onClick={wrongClickSecond} className={classNames({
                    [styles.wrong]:clickedSecondWrong}, styles.answer)}>This is wrong answer</p>
                    {clickedSecondWrong && <p className={styles.wrongText}>Неверный ответ</p>}
                </div>
                <div className={styles.answerContainer}><p onClick={rightClick} className={classNames({
                    [styles.right]:clickedRight}, styles.answer)}>This is right answer</p>
                    {clickedRight && <p className={styles.rightText}>Верный ответ!</p>}
                </div>
                <div className={styles.answerContainer}><p onClick={wrongClickThird} className={classNames({
                    [styles.wrong]:clickedThirdWrong}, styles.answer)}>This is right answer</p>
                    {clickedThirdWrong && <p className={styles.wrongText}>Неверный ответ</p>}
                </div>
            </div>

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