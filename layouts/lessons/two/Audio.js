import LessonLayout from "../../../components/LessonLayout"
import AudioLesson from "../../../components/AudioLesson";
import styles from "../../../components/AudioLesson/AudioLesson.module.scss";
import classNames from "classnames";
import {useState} from "react";


const Audio = () => {
    const englishText = 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your reading skills at your own speed, whenever it\'s convenient for you.'

    const ruText = 'В русском языке слово «леопард» фиксируется с XVIII века, в древнерусских источниках засвидетельствована форма «леонтопардос» (из греч. λεοντόπαρδος). Слово «леопард» проникло в русский из западноевропейских языков (фр. léopard, нем. Leopard), в которые пришло из позднелатинского словосложения leopardus (leo «лев» и pardus «барс»)[6]. Русское «барс» заимствовано из тюркских языков и засвидетельствовано с 1625 года[7]. Современное видовое название Panthera пришло в латынь из др.-греч. πάνθηρ. Последнее, в свою очередь, было заимствовано из какого-то восточного языка, ср. санскр. puṇḍarīkaḥ «тигр»[8]'

    const audioString = '/audio/one.mp3'

    const [clickedRight, setClickedRight] = useState(false)
    const [clickedFirstWrong, setClickedFirstWrong] = useState(false)
    const [clickedSecondWrong, setClickedSecondWrong] = useState(false)
    const [clickedThirdWrong, setClickedThirdWrong] = useState(false)
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
        <LessonLayout part='Аудио урок' lessonNumber='two'>
           <AudioLesson
               lessonNumber='two'
               englisText={englishText}
               ruText={ruText}
               audioString={audioString}
           />

            <div className={styles.test}>
                <h2>Выберите правильный вариант</h2>
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
        </LessonLayout>
    )
}

export default Audio