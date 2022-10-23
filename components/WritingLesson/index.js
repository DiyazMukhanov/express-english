import styles from './WritingLesson.module.scss'
import {useRouter} from "next/router";
import {Button} from "../Button";
import {useState, useRef} from "react";

const WritingLesson = () => {
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
            <h2>Напишите в свободной форме о своей семье</h2>
              <p>Ниже представлен образец, но вы можете писать в свободной форме как вам нравится</p>
              <div>
              <textarea className={styles.input} onChange={inputValueHandler}/>
                  <div className={styles.inputBtnContainer}>
                  <Button variant='outlined' className={styles.sendBtn}>Отправить</Button>
                      <Button variant='outlined' className={styles.sendBtn} onClick={exampleHandler}>{!showExample ? 'Показать пример' : 'Скрыть пример' }</Button>
                  </div>
                  {showExample && <div className={styles.example}>
                      Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your reading skills at your own speed, whenever it's convenient for you.
                  </div>}
              </div>
          </div>
        <div className={styles.btnContainer}>
            <Button
                className={styles.buttonNext}
                onClick={handleRouting(`/lessons/two/video`)}
            >
                Следующий раздел
            </Button>
        </div>
    </div>
}

export default WritingLesson