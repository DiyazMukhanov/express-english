import styles from './WritingLesson.module.scss'
import {useRouter} from "next/router";
import {Button} from "../Button";
import {useState, useRef} from "react";

const WritingLesson = ({englishText, ruText, task}) => {
    const [showExample, setShowExample] = useState(false)
    const [textValue, setTextValue] = useState('')

    const inputValueHandler = (event) => {
        setTextValue(event.target.value)
    }
    const router = useRouter()
    // const textRef = useRef()

    const handleRouting = (url) => {
        return function(e) {
            e.preventDefault()
            router.push(url)
        }
    }

    const exampleHandler = () => {
        setShowExample(!showExample);
    }

    return <div className={styles.container}>
          <div className={styles.task}>
            <h2>{task}</h2>
              <p>Ниже представлен образец, но вы можете писать в свободной форме как вам нравится</p>
              <div>
              <textarea className={styles.input} onChange={inputValueHandler}/>
                  <div className={styles.inputBtnContainer}>
                  <Button variant='outlined' className={styles.sendBtn}>Отправить</Button>
                      <Button variant='outlined' className={styles.sendBtn} onClick={exampleHandler}>{!showExample ? 'Показать пример' : 'Скрыть пример' }</Button>
                  </div>
                  {showExample && <div className={styles.example}>
                      {englishText}
                      <br/>
                      <br/>
                      {ruText}
                  </div>}
              </div>
          </div>
        <div className={styles.btnContainer}>
            <Button
                className={styles.buttonNext}
                onClick={handleRouting(`/lessons/one/quiz`)}
            >
                Следующий раздел
            </Button>
        </div>
    </div>
}

export default WritingLesson