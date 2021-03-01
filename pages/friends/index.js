import Head from "next/head";
import Link from "next/link";
import Layout from '../../components/Layout';
import styles from "../../styles/FriendsPage.module.scss";
import FriendItem from "../../components/FriendItem";
// import { useGeolocation } from "beautiful-react-hooks"; 
import { dayjs } from "../../plugins";


export default function Friends() {
// const [geoState] = useGeolocation();
   
const friends = [
  {
    id: 'dummy1-id',
    nickname: 'dummy1-nickname',
    face_image_url: '',
    pin: {
      datetime: new Date(),
      latitude: 0,
      longitude: 0,
    },
  },
  {
    id: 'dummy2-id',
    nickname: 'dummy2-nickname',
    face_image_url: '',
    pin: {
      datetime: new Date(),
      latitude: 0,
      longitude: 0,
    },
  },
]


const pin =  () => {
    console.log(pin);
};

    return (
        <Layout>
        <Head>
        <title>友達一覧 | Hanly</title>
        </Head>
        <div>
         {/* {!!user && ( */}
        <Link href="/me">
            <a className={styles.user}>
            <img
                className={styles.user__icon}
                src={"https://res.cloudinary.com/kiyopikko/image/upload/v1561617116/empty-user-image_o4ll8m.png"
                }
              />
            <div className={styles.user__txt}>マイページ</div>
            </a>
        </Link>
          {/* )} */}
        <div className={styles.friends}>
            <h2 className={styles.headline}>友だち</h2>
            {friends.map((friend,i) => (
            <FriendItem
                key={friend.id}
                href={"/friends/" + friend.id}
                nickname={friend.nickname}
                date={
                    friend.pin
                    ? dayjs(friend.pin.datetime).format("YYYY/MM/DD HH:mm"):""
                }
                img={friend.face_image_url || ""}
                // iconPlaceholder={getPlaceholder(i)}
            />
            ))}
        </div>

        <div className={styles.noFriends}>
            <img
               src="https://res.cloudinary.com/kiyopikko/image/upload/v1562219254/hanly-gray_2x_pdy6qo.png"
               alt=""
               width="178" 
            />
            <p className={styles.txt}>
              右下のボタンからピンを打って近くの友だちを探しましょう
            </p>
            </div>
            <button
             className={styles.pin}
             onClick={pin}
             >
             </button>
        </div>
        </Layout>
    )
}
