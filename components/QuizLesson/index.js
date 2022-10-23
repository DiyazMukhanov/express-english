import styles from './QuizLesson.module.scss'
import audio from "../../layouts/lessons/one/Audio"
import { useState, useRef } from "react"
import {Button} from "../Button";

const QuizLesson = ({wordsEnArr, wordsRuArr, audioString}) => {
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

    return <div className={styles.container}>
        <h2>Новые слова</h2>
        <audio
            controls
            src={audioString}
            className={styles.audio}
        >
        </audio>
        <div className={styles.wordsListContainer}>
          <div className={styles.enWords}>
              {wordsEnArr.map(word => <li>{word}</li>)}
          </div>
            <div className={styles.ruWords}>
                {wordsRuArr.map(word => <li>{word}</li>)}
            </div>
        </div>
        <div className={styles.quizContainer}>
            <div className={styles.quiz}>
                <h2>Напишите в поле перевод слова</h2>
                {quizCurrentEn}
                <input ref={quizRef}/><Button onClick={checkQuizHandler}>Проверить</Button>
                {answerCheck === 'right' && <p>Верно!</p>}
                {answerCheck === 'wrong' && <p>Неверно!</p>}
                <Button variant='outlined' onClick={quizNextWord}>Следующее слово</Button>
            </div>

        </div>
    </div>
}

export default QuizLesson