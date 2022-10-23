import styles from "../AudioLesson/AudioLesson.module.scss"
import audio from "../../layouts/lessons/one/Audio"


const ReadingLesson = ({lessonNumber}) => {
    return <div>
        <h2 className={styles.heading}>Прослушайте запись и прочитайте текст</h2>
        <div className={styles.audioContainer}>
            <audio
                controls
                src={`/audio/${lessonNumber}.mp3`}
                className={styles.audio}
            >
            </audio>
        </div>
    </div>
}

export default ReadingLesson