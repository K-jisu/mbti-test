import React from "react";
import AuthContainer from "../components/Auth/AuthContainer";
import AuthForm from "../components/Auth/AuthForm";
import AuthInput from "../components/Auth/AuthInput";
import AuthBtn from "../components/Auth/AuthBtn";

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <AuthContainer>
        <h1 className="text-3xl font-bold text-primary-color mb-6">로그인</h1>
        <AuthForm>
          <AuthInput />
          <AuthInput />
          <AuthBtn content="로그인" />
        </AuthForm>
      </AuthContainer>
    </div>
  );
};

export default Login;
