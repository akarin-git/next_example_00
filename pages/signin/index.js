import Head from "next/head";
import Button from "../../components/Base/Button";
import Layout from "../../components/Layout";
import SignInForm from "../../components/SignInForm";
import { useAppRouter,useAppAxiosExecute } from "../../hooks";

import { useEffect } from "react";

export default function SignUp() {
    const [router] = useAppRouter();
    const [
        { loading:fetchingCredentials },
        fetchClientCredentials,
    ] = useAppAxiosExecute({
        url:"/api/oauth/client-credentials",
    });
    const [
        { data,error,loading:signingIn },
            signWithToken,
    ] = useAppAxiosExecute({
        url:"/api/oauth/token",
        method:"POST",
        errorMessage:"メールアドレスが存在しないか、パスワードが間違っています",
    });
    
    useEffect(() => {
        // console.log(data);
        if(data && process.browser) {
            window.localStorage.setItem("hanly_access_token",data.access_token);
            router.push("/friends");
        }
    }, [data])

    // const signIn = ({email,password}) => {
    //     // console.log("SUBMIT" + email + password);
    // };
    const signIn = async ({ email,password }) => {
        console.log("post");
        const { client_id, client_secret } = await fetchClientCredentials();
        // console.log(fetchClientCredentials());
        signWithToken({
      grant_type: "password",
      client_id,
      client_secret,
      scope: "*",
      username: email,
      password,
    });
        // console.log(client_id, client_secret);
    };

    return (
        <Layout>
            <Head>
                <title>ログイン</title>
            </Head>
            <div className="wrap">
                <SignInForm
                    onSubmit={signIn}
                    isSending={fetchingCredentials || signingIn}
                    // onSubmit={(value) => console.log(value)}
                />
                <Button href="/" className="mts" isTxt>
                    戻る
                </Button>
                 {error && <p className="error">{error}</p>}
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

