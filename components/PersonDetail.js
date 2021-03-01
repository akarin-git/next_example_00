import dynamic from "next/dynamic";

import styles from "../styles/PersonDetail.module.scss";
import Loader from "./Loader";
import Button from "./Base/Button";

const PersonMap = dynamic(import("./PersonMap"),{
    ssr:false,
    loading:() => <Loader />,
});

function PersonDetail({
    nickname,
    latitude,
    longitude,
    datetime,
}) {
    return (
        <div className={styles.person}>
            <h2 className={styles.nickname}>{nickname}</h2>
            <div className={styles.mapWrap}>
                <PersonMap latitude={latitude} longitude={longitude}/>
            </div>
            <p className={styles.datetime}>
            {latitude && longitude
                ? `${datetime} 時点`
                : "まだピンを打っていません"
            }
            </p>
            <div className={styles.buttonWrap}>
                <Button href="/friends">戻る</Button>
            </div>
        </div>
    );
}

export default PersonDetail;