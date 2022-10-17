import styles from './Header.module.scss'
import Link from "next/link"
import Avatar from "../../public/icons/avatar.svg"
import Bell from "../../public/icons/bell.svg"

const Header = () => {
    return (
        <div className={styles.container}>
        <div className={styles.left}>
          <Link href='/lessons'><a>Уроки</a></Link>
            <Link href='/service'><a>Служба поддержки</a></Link>
        </div>
        <div className={styles.right}>
            <div className={styles.bell}>
                <Bell />
            </div>
              <div className={styles.avatar}>
                  <Avatar />
              </div>

            <p className={styles.username}>
                Diyaz Mukhanov
            </p>
        </div>
    </div>)
}

export default Header