import classnames from "classnames";
import Head from "next/head";
import Link from "next/link";
import Layout from '../../components/Layout';
import Loader from "../../components/Loader";
import styles from "../../styles/FriendsPage.module.scss";
import FriendItem from "../../components/FriendItem";
import { useAppContext, useAppAxios, useAppAxiosExecute } from "../../hooks";
import { useGeolocation } from "beautiful-react-hooks"; 
import { dayjs } from "../../plugins";

const getPlaceholder = (i) =>
  i % 3 === 0
    ? "linear-gradient(141.16deg, #F686AB 11.81%, #FFE177 82.38%)"
    : i % 3 === 1
    ? "linear-gradient(141.16deg, #B7F4EF 11.81%, #E27EA0 85.05%)"
    : "linear-gradient(141.16deg, #FFE073 11.81%, #AFFDF6 85.05%)";


export default function Friends() {
  if (!process.browser) return null;
  // console.log(process.browser)
// const [geoState] = useGeolocation();
   
// const friends = [
  // {
  //   id: 'dummy1-id',
  //   nickname: 'dummy1-nickname',
  //   face_image_url: '',
  //   pin: {
  //     datetime: new Date(),
  //     latitude: 0,
  //     longitude: 0,
  //   },
  // },
  // {
  //   id: 'dummy2-id',
  //   nickname: 'dummy2-nickname',
  //   face_image_url: '',
  //   pin: {
  //     datetime: new Date(),
  //     latitude: 0,
  //     longitude: 0,
  //   },
  // },
// ]

const [geoState] = useGeolocation();

const {
  state:{user},
} = useAppContext();
// console.log(user);


   const [{ data: friends, loading, error }, refetchFriends] = useAppAxios({
    url: "/api/friends",
  });
  // console.log(friends);

  const [{ loading: pinning }, pinAndMakeFriends] = useAppAxiosExecute({
    method: "POST",
    url: "/api/my/pin",
  });
  
  const pin = async () => {
    await pinAndMakeFriends({
      latitude: geoState.position.coords.latitude,
      longitude: geoState.position.coords.longitude,
    });
    refetchFriends();
  };
  // console.log(pin)

    return (
        <Layout>
        <Head>
        <title>友達一覧 | Hanly</title>
        </Head>
        <div>
         {!!user && (
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
         )}
         {loading && <Loader />}
         {!loading && !!friends.length && (
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
              iconPlaceholder={getPlaceholder(i)}
              />
              ))}
        </div>
      )}
      {!loading && !friends.length && (
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
               )}
            <button
             className={classnames(styles.pin, { [styles.isPinning]: pinning })}
             disabled={pinning || !geoState.isSupported || !geoState.position}
             onClick={pin}
             >
             </button>
        </div>
        </Layout>
    );
}
