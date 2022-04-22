import React, { useState } from "react";
import { observer } from "mobx-react";
import axios from "axios";
import UserStore from "../../stores/UserStore";
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = observer(() => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (event: any) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event: any) => {
    setPassword(event.currentTarget.value)
  }
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    let body = {
      email: Email,
      password: Password
    }
    axios.post("/api/users/login", body)
      .then((res) => {
        if (res.data.loginSuccess) {
          console.log(res.data);
          navigate("/");
        } else {
          console.log("로그인 실패")
        }
      })
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <br />
        <button type="submit">login</button>
      </form>
    </div>);
});

export default LoginPage;
