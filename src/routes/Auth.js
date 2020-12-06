import React, {useState} from "react";
import {authService} from "fbase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {
            target: {name,value},
        } = event;
        if (name === "email") {
            setEmail(value);
        }
        else if (name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email"
                    type="text" 
                    placeholder="이화인 계정" 
                    required value={email} 
                    onChange={onChange}
                />
                <input
                    name="password" 
                    type="password" 
                    placeholder="비밀번호" 
                    required value={password}
                    onChange={onChange}
                />
                <input type="submit" value="로그인" />
            </form>
        </div>
    );
}
export default Auth;
