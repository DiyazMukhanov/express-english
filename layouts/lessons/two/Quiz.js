import LessonLayout from "../../../components/LessonLayout"
import QuizLesson from "../../../components/QuizLesson"

const Quiz = () => {
    const wordsEnArr = ['play', 'run', 'dream', 'draw', 'go', 'write', 'cat', 'dog', 'forest', 'tv', 'school', 'university', 'cartoons', 'family']

    const wordsRuArr = ['играть', 'бегать', 'сон', 'рисовать', 'идти', 'писать', 'кошка', 'собака', 'лес', 'тв', 'школа', 'университет', 'мультики', 'семья']

    const audioString = '/audio/one.mp3'

    return (
        <LessonLayout part='Словарный запас' lessonNumber='two'>
            <QuizLesson
                wordsEnArr={wordsEnArr}
                wordsRuArr={wordsRuArr}
                audioString={audioString}
                lessonNumber='two'
            />
        </LessonLayout>
    )
}

export default Quiz

