import React, {useState} from "react";
import { authService, firebaseInstance } from "fbase";

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
    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        let data;
        data = await authService.signInWithEmailAndPassword(email, password);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    return(
        <div>
           <form onSubmit={onSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={onChange}
            />
            <input
              type="submit"
              value= "Sign In"
            />
            {error}
          </form>
        </div>
    );
};
export default Auth;
