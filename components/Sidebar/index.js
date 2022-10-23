import {useState} from "react"
import styles from "./Sidebar.module.scss"
import Link from "next/link";
import classNames from "classnames"

const Sidebar = () => {
    const [openedLesson, setOpenedLesson] = useState('')
    const parts = [
        {
            part: 'Видео урок',
            slug: 'video'
        },
        {
            part: 'Аудирование',
            slug: 'audio'
        },
        {
            part: 'Чтение',
            slug: 'reading'
        },
        {
            part: 'Письмо',
            slug: 'writing'
        },
        {
            part: 'Словарный запас',
            slug: 'quiz'
        },
        {
            part: 'Упражнения',
            slug: 'exercise'
        }
    ]

    const lessons = [
        {
            lesson: 'Урок 1',
            lessonNumber: 'one',
            parts: parts
        },
        {
            lesson: 'Урок 2',
            lessonNumber: 'two',
            parts: parts
        },
        {
            lesson: 'Урок 3',
            lessonNumber: 'three',
            parts: parts
        },
        {
            lesson: 'Урок 4',
            lessonNumber: 'four',
            parts: parts
        },
        {
            lesson: 'Урок 5',
            lessonNumber: 'five',
            parts: parts
        },
        {
            lesson: 'Урок 6',
            lessonNumber: 'six',
            parts: parts
        },
        {
            lesson: 'Урок 7',
            lessonNumber: 'seven',
            parts: parts
        },
        {
            lesson: 'Урок 8',
            lessonNumber: 'eight',
            parts: parts
        },
        {
            lesson: 'Урок 9',
            lessonNumber: 'nine',
            parts: parts
        },
        {
            lesson: 'Урок 10',
            lessonNumber: 'ten',
            parts: parts
        },
        {
            lesson: 'Урок 11',
            lessonNumber: 'eleven',
            parts: parts
        },
        {
            lesson: 'Урок 12',
            lessonNumber: 'twelve',
            parts: parts
        },
        {
            lesson: 'Урок 13',
            lessonNumber: 'thirteen',
            parts: parts
        },
        {
            lesson: 'Урок 14',
            lessonNumber: 'fourteen',
            parts: parts
        },
        {
            lesson: 'Урок 15',
            lessonNumber: 'fifteen',
            parts: parts
        },
        {
            lesson: 'Урок 16',
            lessonNumber: 'sixteen',
            parts: parts
        },
        {
            lesson: 'Урок 17',
            lessonNumber: 'seventeen',
            parts: parts
        },
        {
            lesson: 'Урок 18',
            lessonNumber: 'eighteen',
            parts: parts
        },
        {
            lesson: 'Урок 19',
            lessonNumber: 'nineteen',
            parts: parts
        },
        {
            lesson: 'Урок 20',
            lessonNumber: 'twenty',
            parts: parts
        },
        {
            lesson: 'Урок 21',
            lessonNumber: 'twenty-one',
            parts: parts
        },
        {
            lesson: 'Урок 22',
            lessonNumber: 'twenty-two',
            parts: parts
        },
        {
            lesson: 'Урок 23',
            lessonNumber: 'twenty-three',
            parts: parts
        },
        {
            lesson: 'Урок 24',
            lessonNumber: 'twenty-four',
            parts: parts
        },
        {
            lesson: 'Урок 25',
            lessonNumber: 'twenty-five',
            parts: parts
        },
        {
            lesson: 'Урок 26',
            lessonNumber: 'twenty-six',
            parts: parts
        },
        {
            lesson: 'Урок 27',
            lessonNumber: 'twenty-seven',
            parts: parts
        },
        {
            lesson: 'Урок 28',
            lessonNumber: 'twenty-eight',
            parts: parts
        },
        {
            lesson: 'Урок 29',
            lessonNumber: 'twenty-nine',
            parts: parts
        },
        {
            lesson: 'Урок 30',
            lessonNumber: 'thirty',
            parts: parts
        },
    ]

    return (
        <div className={styles.container}>
            <p className={styles.paragraph}>Уроки</p>
            <ul>
                {lessons.map(
                    item =>
                        <li key={item.lesson}
                            className={classNames({
                                 [styles.openedLesson]: openedLesson === item.lesson,
                                 [styles.list]: openedLesson !== item.lesson
                                }
                            )
                        }
                            onClick={() => setOpenedLesson(item.lesson)}>
                            {item.lesson}
                            <ul>
                                {openedLesson === item.lesson && item.parts.map(part =>
                                    <li><Link href={`/lessons/${item.lessonNumber}/${part.slug}`}>
                                        <a className={styles.link}>{part.part}</a>
                                    </Link>
                                    </li>
                                )}
                            </ul>
                        </li>)}
            </ul>
        </div>
    )
}

export default Sidebar