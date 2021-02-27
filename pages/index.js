import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Button from "../components/Base/Button";



export default function Home() {
  return (
    <Layout>
    <Head>
      <title>Hanly - ピンを打って友だちの場所を確認しよう</title>
    </Head>
    <div className={styles.imgWrap}>
          <img
            src="https://res.cloudinary.com/kiyopikko/image/upload/v1561802660/hanly-splash_ushtah.png"
            alt="Hanly"
            width="178"
          />
      </div>
        
   <div className={styles.buttons}>
    <Button>ログイン</Button>
    <Button>新規登録</Button>
   </div>
    </Layout>
  );
}
