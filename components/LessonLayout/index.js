import styles from "./LessonLayout.module.scss"
import Header from "../Header"
import Sidebar from "../Sidebar"

const LessonLayout = ({children, part, lessonNumber}) => {
    return (
        <div className={styles.container}>
           <Header />
            <div className={styles.main}>
                <Sidebar />
                <div className={styles.lesson}>
                    <div className={styles.lessonHeader}>
                        <h1>Lesson {lessonNumber}</h1>
                       <h2>{part}</h2>
                    </div>
                    {children}
                </div>
            </div>

       </div>);
}

export default LessonLayout