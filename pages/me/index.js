import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Base/Button";

import { dayjs } from "../../plugins";
import PersonDetail from "../../components/PersonDetail";



export default function Me() {
const user = 
  {
    id: 'user1-id',
    nickname: 'user1-nickname',
    face_image_url: '',
    pin: {
      datetime: new Date(),
      latitude: 51.505,
      longitude: -0.09,
    },
  }

    return (
        <Layout>
            <Head>
                <title>プロフィール</title>
            </Head>
            <PersonDetail
                nickname={user.nickname}
                latitude={user.pin ? user.pin.latitude : 0}
                longitude={user.pin ? user.pin.longitude : 0}
                datetime={
            user.pin ? dayjs(user.pin.datetime).format("YYYY/MM/DD HH:mm") : ""
          }
          />
            <Button isTxt>
                ログアウト
            </Button>
        </Layout>
    );
}

