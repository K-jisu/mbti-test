import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import CommonContainer from "../components/Auth/CommonContainer";
import CommonForm from "../components/Auth/CommonForm";
import CommonInput from "../components/Auth/CommonInput";
import CommonBtn from "../components/Auth/CommonBtn";

const Login = () => {
  const naigate = useNavigate();
  const { accessLogin } = useContext(AuthContext);
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
      const { accessToken } = await login(loginData);
      accessLogin(accessToken);
      naigate("/profile");
    } catch (error) {
      console.log("로그인에 실패", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <CommonContainer>
        <h1 className="text-3xl font-bold text-primary-color mb-6">로그인</h1>
        <CommonForm onSubmit={handleLogin}>
          <CommonInput
            type="text"
            name="id"
            value={loginData.id}
            onChange={handleChange}
            placeholder="아이디를 입력하세요"
          />
          <CommonInput
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
          />
          <CommonBtn content="로그인" />
        </CommonForm>
      </CommonContainer>
    </div>
  );
};

export default Login;
