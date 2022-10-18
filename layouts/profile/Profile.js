import Header from "../../components/Header"
import ProfileHeader from "./ProfileHeader";
import Subscription from "./Subscription";
import styles from "./Profile.module.scss"
import NoSubscription from "./NoSubscription";
import {useState} from "react";


const Profile = () => {
   const [isSuscribed, setIsSubscribed] = useState(true);

   return (<div>
       <Header />
       <ProfileHeader />
       <div className={styles.subscriptions}>
           <h1>Мои подписки</h1>
           {isSuscribed ? (<Subscription />) : (<NoSubscription />)}
       </div>

   </div>)
}

export default Profile