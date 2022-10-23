import styles from './QuizLesson.module.scss'
import audio from "../../layouts/lessons/one/Audio"
import { useState, useRef } from "react"
import {Button} from "../Button";
import {useRouter} from "next/router";

const QuizLesson = ({wordsEnArr, wordsRuArr, audioString, lessonNumber}) => {
    const [quizCurrentEn, setQuizCurrentEn] = useState(wordsEnArr[0])
    const [answerCheck, setAnswerCheck] = useState('wrong')
    const quizRef = useRef()

    const quizNextWord = () => {

        const indexOfCurrentWord = wordsEnArr.findIndex(el=>el===quizCurrentEn)
        const nextWord = wordsEnArr[indexOfCurrentWord+1]
        if(nextWord) {
            setQuizCurrentEn(nextWord)
        } else {
            setQuizCurrentEn(wordsEnArr[0])
        }
    }

    const checkQuizHandler = () => {
        const indexOfCurrentWord = wordsEnArr.findIndex(el=>el===quizCurrentEn)
        const inputValue = quizRef.current.value
        const wordInput = inputValue.toLowerCase()
        console.log(wordInput, quizCurrentEn)


        if(wordInput === wordsRuArr[indexOfCurrentWord]) {
            setAnswerCheck('right')
        } else {
            setAnswerCheck('wrong')
        }
        quizRef.current.value = ''
    }

    const router = useRouter()

    const handleRouting = (url) => {
        return function(e) {
            e.preventDefault()
            router.push(url)
        }
    }

    return <>
        <div className={styles.container}>
        <h2>Новые слова</h2>
        <audio
            controls
            src={audioString}
            className={styles.audio}
        >
        </audio>
        <div className={styles.wordsListContainer}>
          <div className={styles.wordsList}>
              {wordsEnArr.map(word => <li key={word}>{word}</li>)}
          </div>
            <div className={styles.wordsList}>
                {wordsRuArr.map(word => <li key={word}>{word}</li>)}
            </div>
        </div>
        <div className={styles.quizContainer}>
            <div className={styles.quiz}>
                <h2 className={styles.heading}>Напишите в поле перевод слова</h2>
                <p className={styles.word}>{quizCurrentEn}</p>
                <div className={styles.inputContainer}>
                <input ref={quizRef} className={styles.input}/>
                </div>
                    <Button onClick={checkQuizHandler} className={styles.checkBtn}>Проверить</Button>
                {answerCheck === 'right' && <p className={styles.right}>Верно!</p>}
                {answerCheck === 'wrong' && <p className={styles.wrong}>Неверно!</p>}
                <Button variant='outlined' onClick={quizNextWord}>Следующее слово</Button>
            </div>
        </div>
    </div>
        <div className={styles.btnContainer}>
            <Button
                className={styles.buttonNext}
                onClick={handleRouting(`/lessons/${lessonNumber}/exercise`)}
            >
                Следующий раздел
            </Button>
        </div>
        </>
}

export default QuizLesson