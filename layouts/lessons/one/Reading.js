import LessonLayout from "../../../components/LessonLayout"
import ReadingLesson from "../../../components/ReadingLesson"

const Reading = () => {

    const audioString = `/audio/one.mp3`

    const englishText = 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your reading skills at your own speed, whenever it\'s convenient for you.'

    const ruText = 'В русском языке слово «леопард» фиксируется с XVIII века, в древнерусских источниках засвидетельствована форма «леонтопардос» (из греч. λεοντόπαρδος). Слово «леопард» проникло в русский из западноевропейских языков (фр. léopard, нем. Leopard), в которые пришло из позднелатинского словосложения leopardus (leo «лев» и pardus «барс»)[6].\n' +
        '\n' +
        '                Русское «барс» заимствовано из тюркских языков и засвидетельствовано с 1625 года[7].\n' +
        '\n' +
        '                Современное видовое название Panthera пришло в латынь из др.-греч. πάνθηρ. Последнее, в свою очередь, было заимствовано из какого-то восточного языка, ср. санскр. puṇḍarīkaḥ «тигр»[8]'

    return (
        <LessonLayout part='Чтение'>
            <ReadingLesson
                lessonNumber='one'
                audioString={audioString}
                englishText={englishText}
                ruText={ruText}
            />
        </LessonLayout>
    )
}

export default Reading