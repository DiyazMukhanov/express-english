import styles from "./ProfileHeader.module.scss"
import Logout from "./../../public/icons/loggingout.svg"
import Avatar from "./../../public/icons/ava.svg"
import {Button} from "../../components/Button";


const ProfileHeader = () => {
    return (
        <div className={styles.container}>
         <div className={styles.left}>
             <div className={styles.avatarBig}>
             <Avatar />
             </div>
             <div className={styles.nameBlock}>
                 <p className={styles.name}>Diyaz Mukhanov</p>
                 <p className={styles.email}>diyaz.mukhanov@gmail.com</p>
             </div>
         </div>
            <div className={styles.right}>
                <Logout />
                <Button variant="ghost">Выход</Button>
            </div>

        </div>
    )
}


export default ProfileHeader