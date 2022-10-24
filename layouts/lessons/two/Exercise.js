import LessonLayout from "../../../components/LessonLayout"
import styles from './Exercise.module.scss'
import {useState, useRef} from "react";
import {Button} from "../../../components/Button";
import {useRouter} from "next/router";


    const Exercise = () => {
    const [showCheckMarker, setShowCheckMarker] = useState('')
    const answerClickHandler = (event) => {
        setShowCheckMarker(event.target.id)
        console.log(event.target.id)
    }

        const router = useRouter()

        const handleRouting = (url) => {
            return function(e) {
                e.preventDefault()
                router.push(url)
            }
        }

    return (
        <LessonLayout part='Упражнения' lessonNumber='two'>
            <div className={styles.container}>
                <h2>Выберите правильный вариант</h2>
                <p className={styles.question}>1) I <span>...</span> to school every day</p>
                <ul>
                    <li onClick={answerClickHandler} key='one' id='one'>goes <span>{showCheckMarker === 'one' && <p className={styles.paragraph}>Неверно!</p>}</span></li>
                    <li onClick={answerClickHandler} key='two' id='two'>go <span>{showCheckMarker === 'two' && <p className={styles.right}>Верно!</p>}</span></li>
                        <li onClick={answerClickHandler} key='three' id='three'>goes <span>{showCheckMarker === 'three' && <p className={styles.paragraph}>Неверно!</p>}</span></li>
                            <li onClick={answerClickHandler} key='four' id='four'>goed <span>{showCheckMarker === 'four' && <p className={styles.paragraph}>Неверно!</p>}</span></li>
                </ul>

                <p className={styles.question}>2) I <span>...</span> to school every day</p>
                <ul>
                    <li onClick={answerClickHandler} key='five' id='five'>goes <span>{showCheckMarker === 'five' && <p className={styles.paragraph}>Неверно!</p>}</span></li>
                    <li onClick={answerClickHandler} key='six' id='six'>goel <span>{showCheckMarker === 'six' && <p className={styles.paragraph}>Неверно!</p>}</span></li>
                    <li onClick={answerClickHandler} key='seven' id='seven'>goes <span>{showCheckMarker === 'seven' && <p className={styles.paragraph}>Неверно!</p>}</span></li>
                    <li onClick={answerClickHandler} key='eight' id='eight'>go <span>{showCheckMarker === 'eight' && <p className={styles.right}>Верно!</p>}</span></li>
                </ul>

                <p className={styles.question}>3) I <span>...</span> to school every day</p>
                <ul>
                    <li onClick={answerClickHandler} key='nine' id='nine'>goes <span>{showCheckMarker === 'nine' && <p className={styles.paragraph}>Неверно!</p>}</span></li>
                    <li onClick={answerClickHandler} key='ten' id='ten'>goel <span>{showCheckMarker === 'ten' && <p className={styles.paragraph}>Неверно!</p>}</span></li>
                    <li onClick={answerClickHandler} key='eleven' id='eleven'>goes <span>{showCheckMarker === 'eleven' && <p className={styles.paragraph}>Неверно!</p>}</span></li>
                    <li onClick={answerClickHandler} key='twelve' id='twelve'>go <span>{showCheckMarker === 'twelve' && <p className={styles.right}>Верно!</p>}</span></li>
                </ul>
                <div className={styles.btnContainer}>
                    <Button
                        className={styles.buttonNext}
                        onClick={handleRouting(`/lessons/three/video`)}
                    >
                        Следующий раздел
                    </Button>
                </div>
            </div>
        </LessonLayout>
    )
}

export default Exercise