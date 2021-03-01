import Head from "next/head";
import Button from '../../components/Base/Button';
import Layout from "../../components/Layout";
import SignUpForm from "../../components/SignUpForm";

export default function SignUp() {
    return (
      <Layout>
        <Head>
        <title>新規登録 | Hanly</title>
        </Head>
        <div className="wrap">
            <SignUpForm
                onSubmit={(value) => console.log(value)}
            />
            <Button href="/" className="mts">
            戻る
            </Button>
            </div>
    <style jsx>
        {`
          .wrap {
            padding: 2.5rem 1rem 0;
          }
        `}
      </style>
        </Layout>
    )
}

