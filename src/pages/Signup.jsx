import React from "react";
import AuthContainer from "../components/Auth/AuthContainer";
import AuthForm from "../components/Auth/AuthForm";
import AuthInput from "../components/Auth/AuthInput";
import AuthBtn from "../components/Auth/AuthBtn";
import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signUpData, setSighUpData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSighUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const { message } = await register(signUpData);
      console.log(message);
      navigate("/login");
    } catch (error) {
      console.log("회원가입 오류", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <AuthContainer>
        <h1 className="text-4xl font-bold mb-6 text-center">회원가입</h1>
        <AuthForm onSubmit={handleRegister}>
          <AuthInput
            type="text"
            name="id"
            value={signUpData.id}
            onChange={handleChange}
            placeholder="아이디"
          />
          <AuthInput
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="비밀번호"
          />
          <AuthInput
            type="text"
            name="nickname"
            onChange={handleChange}
            placeholder="닉네임"
          />
          <AuthBtn content="회원가입" type="submit" />
        </AuthForm>
      </AuthContainer>
    </div>
  );
};

export default Signup;
