import LessonLayout from "../../../components/LessonLayout"
import {Button} from "../../../components/Button";
import styles from "./Intro.module.scss"
import {useRouter} from "next/router";



const Intro = () => {
    const router = useRouter()

    const handleRouting = (url) => {
        return function(e) {
            e.preventDefault()
            router.push(url)
        }
    }

    return  <LessonLayout part='Введение'>
        <div className={styles.container}>
            Каждый урок состоит из пояснения, нескольких просмотров видео и практической части. Для более эффективной работы заведите тетрадь, в которую вы будете записывать изученные правила и слова.

            Последовательно выполняя задания, вы пополните словарный запас, научитесь строить простые фразы на английском, а также начнете понимать английскую речь на слух.

            Обратите внимание, что удобнее проходить курс на ПК, так как в мобильном приложении многие задания не открываются.

            Технические вопросы и предложения пишите в специальный раздел (клик) или на электронную почту forworkandquestions@gmail.com .

            Успехов!
        </div>
            <Button className={styles.startBtn} onClick={handleRouting('/lessons/one/video')}>Начать уроки</Button>
    </LessonLayout>
}

export default Intro