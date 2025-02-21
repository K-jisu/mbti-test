import { useState } from "react";
import AuthContainer from "../components/Auth/AuthContainer";
import AuthForm from "../components/Auth/AuthForm";
import AuthInput from "../components/Auth/AuthInput";
import AuthBtn from "../components/Auth/AuthBtn";
import { login } from "../api/auth";

const Login = () => {
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      await login(loginData);
      console.log("로그인 성공");
    } catch (error) {
      console.log("로그인에 실패");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <AuthContainer>
        <h1 className="text-3xl font-bold text-primary-color mb-6">로그인</h1>
        <AuthForm onSubmit={handleLogin}>
          <AuthInput
            type="text"
            name="id"
            value={loginData.id}
            onChange={handleChange}
            placeholder="아이디를 입력하세요"
          />
          <AuthInput
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
          />
          <AuthBtn content="로그인" />
        </AuthForm>
      </AuthContainer>
    </div>
  );
};

export default Login;
