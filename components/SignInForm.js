import Input from './Base/Input';
import Button from './Base/Button';
import { useState } from "react";

const SignInForm = ({isSending,onSubmit}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    const submit = (e) => {
        // alert('hi');
        e.preventDefault();
        // console.log(email,password)
        onSubmit({ email,password });
        // console.log(onSubmit);
    };

    return (
        <form onSubmit={submit}>
            <Input
                value={email}
                placeholder="メールアドレス"
                type="email"
                onChange={setEmail}
            />
            <Input
                value={password}
                placeholder="パスワード"
                type="password"
                onChange={setPassword}
            />
            <Button className="mts" disabled={isSending}>
            ログイン
            </Button>
        </form>
    )
}

export default SignInForm;