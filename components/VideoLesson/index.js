import styles from "./VideoLesson.module.scss"
import ReactPlayer from "react-player";
import {useState, useEffect} from "react";
import {Button} from "../Button";
import {useRouter} from "next/router";

const VideoLesson = ({lessonNumber}) => {
    const [hasWindow, setHasWindow] = useState(false)
    useEffect(() => {
        if(typeof window !== 'undefined') {
            setHasWindow(true);
        }
    }, [])

    const router = useRouter()

    const handleRouting = (url) => {
        return function(e) {
            e.preventDefault()
            router.push(url)
        }
    }

    return (
        <div className={styles.container}>
          <p className={styles.paragraph}>
              Внимательно просмотрите видео урок. По необходимости пересматривайте его для закрепления.
          </p>
            <div className={styles.wrapper}>
            {hasWindow && <ReactPlayer
                url='https://youtu.be/d5KjfW8gBpk'
                className={styles.player}
                width="100%"
                height="100%"
            />}
            </div>
            <div className={styles.btnContainer}>
            <Button
                className={styles.button}
                onClick={handleRouting(`/lessons/${lessonNumber}/audio`)}
            >
                Следующий раздел
            </Button>
            </div>
        </div>
    )
}

export default VideoLesson