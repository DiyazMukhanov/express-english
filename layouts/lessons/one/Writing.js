import LessonLayout from "../../../components/LessonLayout"
import WritingLesson from "../../../components/WritingLesson"


const Writing = () => {
    const englisText = 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your reading skills at your own speed, whenever it\'s convenient for you.'

    const ruText = 'Горная система расположена на границе России (Алтайский край, Республика Тыва и Республика Алтай), Монголии (Баян-Ульгийский и Ховдский аймаки), Китая (Синцзян-Уйгурский автономный район) и Казахстана (Восточно-Казахстанская область). Алтайские горы являются водоразделом между бассейном Северного Ледовитого океана и бессточной областью Центральной Азии. Наивысшая точка — гора Белуха (4506 м)[3]'

    const task = 'Напишите в свободной форме о своей семье и нажмите на кнопку "Отправить"'

    return (
        <LessonLayout part='Письмо'>
            <WritingLesson
            englishText={englisText}
            ruText={ruText}
            task={task}
            />
        </LessonLayout>
    )
}

export default Writing