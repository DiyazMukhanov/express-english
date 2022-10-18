import {useState} from "react"
import styles from "./Sidebar.module.scss"
import Link from "next/link";

const Sidebar = () => {
    const [openedLesson, setOpenedLesson] = useState('')
    const parts = [
        {
            part: 'Видео урок',
            slug: 'Video'
        },
        {
            part: 'Аудирование',
            slug: 'Audio'
        },
        {
            part: 'Чтение',
            slug: 'Reading'
        },
        {
            part: 'Письмо',
            slug: 'Writing'
        }
    ]
        // ['Видео урок', 'Аудирование', 'Чтение', 'Письмо']
    const lessons = [
        {
            lesson: 'Урок 1',
            lessonNumber: 1,
            parts: parts
        },
        {
            lesson: 'Урок 2',
            lessonNumber: 2,
            parts: parts
        },
        {
            lesson: 'Урок 3',
            lessonNumber: 3,
            parts: parts
        },
        {
            lesson: 'Урок 4',
            lessonNumber: 4,
            parts: parts
        },
        {
            lesson: 'Урок 5',
            lessonNumber: 5,
            parts: parts
        },
        {
            lesson: 'Урок 6',
            lessonNumber: 6,
            parts: parts
        },
        {
            lesson: 'Урок 7',
            lessonNumber: 7,
            parts: parts
        },
        {
            lesson: 'Урок 8',
            lessonNumber: 8,
            parts: parts
        },
        {
            lesson: 'Урок 9',
            lessonNumber: 9,
            parts: parts
        },
        {
            lesson: 'Урок 10',
            lessonNumber: 10,
            parts: parts
        },
        {
            lesson: 'Урок 11',
            lessonNumber: 11,
            parts: parts
        },
        {
            lesson: 'Урок 12',
            lessonNumber: 12,
            parts: parts
        },
        {
            lesson: 'Урок 13',
            lessonNumber: 13,
            parts: parts
        },
        {
            lesson: 'Урок 14',
            lessonNumber: 14,
            parts: parts
        },
        {
            lesson: 'Урок 15',
            lessonNumber: 15,
            parts: parts
        },
        {
            lesson: 'Урок 16',
            lessonNumber: 16,
            parts: parts
        },
        {
            lesson: 'Урок 17',
            lessonNumber: 17,
            parts: parts
        },
        {
            lesson: 'Урок 18',
            lessonNumber: 18,
            parts: parts
        },
        {
            lesson: 'Урок 19',
            lessonNumber: 19,
            parts: parts
        },
        {
            lesson: 'Урок 20',
            lessonNumber: 20,
            parts: parts
        },
        {
            lesson: 'Урок 21',
            lessonNumber: 21,
            parts: parts
        },
        {
            lesson: 'Урок 22',
            lessonNumber: 22,
            parts: parts
        },
        {
            lesson: 'Урок 23',
            lessonNumber: 23,
            parts: parts
        },
        {
            lesson: 'Урок 24',
            lessonNumber: 24,
            parts: parts
        },
        {
            lesson: 'Урок 25',
            lessonNumber: 25,
            parts: parts
        },
        {
            lesson: 'Урок 26',
            lessonNumber: 26,
            parts: parts
        },
        {
            lesson: 'Урок 27',
            lessonNumber: 27,
            parts: parts
        },
        {
            lesson: 'Урок 28',
            lessonNumber: 28,
            parts: parts
        },
        {
            lesson: 'Урок 29',
            lessonNumber: 29,
            parts: parts
        },
        {
            lesson: 'Урок 30',
            lessonNumber: 30,
            parts: parts
        },
    ]

    return (
        <div className={styles.container}>
            <ul>
                {lessons.map(
                    item =>
                        <li key={item.lesson} className={styles.list} onClick={() => setOpenedLesson(item.lesson)}>
                            {item.lesson}
                            <ul>
                                {openedLesson === item.lesson && item.parts.map(part =>
                                    <li><Link href={`/lessons/${item.lessonNumber}/${part.slug}`}>
                                        <a>{part.part}</a>
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