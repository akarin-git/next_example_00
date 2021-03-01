import Button from './Base/Button';
import Input from './Base/Input';
import { useState } from 'react';

const SignUpForm = ({ onSubmit }) => {
    const [nickname,setNickname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
         console.log(nickname,email,password)
        // onSubmit({ nickname,email,password });
    };

    return (
        <form onSubmit={submit}>
            <Input
                value={nickname}
                placeholder="名前"
                type="text"
                onChange={setNickname}
            />
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
            <Button className="mts">
                新規登録
            </Button>
        </form>
    );
}

export default SignUpForm;