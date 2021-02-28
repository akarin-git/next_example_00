import Head from "next/head";
import Button from "../../components/Base/Button";
import Layout from "../../components/Layout";
import SignInForm from "../../components/SignInForm";
import { useEffect } from "react";

const SignUp = () => {

    const signIn = async ({ email,password }) => {
        const 
    }

    return (
        <Layout>
            <Head>
                <title>ログイン</title>
            </Head>
            <div className="wrap">
                <SignInForm
                    onSubmit={signIn}
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

export default SignUp;