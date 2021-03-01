import Head from "next/head";
import Button from "../../components/Base/Button";
import Layout from "../../components/Layout";
import SignInForm from "../../components/SignInForm";
// import { useEffect } from "react";

export default function SignUp() {

    const signIn = ({email,password}) => {
        // console.log("SUBMIT" + email + password);
    };

    return (
        <Layout>
            <Head>
                <title>ログイン</title>
            </Head>
            <div className="wrap">
                <SignInForm
                    // onSubmit={signIn}
                    onSubmit={(value) => console.log(value)}
                />
                <Button href="/" className="mts">
                    戻る
                </Button>
            </div>
            <style jsx>
                {`
                .wrap {
                    padding:2.5rem 1rem 0;
                }
                `}
            </style>
            
        </Layout>
    )
}

