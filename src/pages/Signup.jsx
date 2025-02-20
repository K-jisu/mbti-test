import React from "react";
import AuthContainer from "../components/Auth/AuthContainer";
import AuthForm from "../components/Auth/AuthForm";
import AuthInput from "../components/Auth/AuthInput";
import AuthBtn from "../components/Auth/AuthBtn";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <AuthContainer>
        <h1 className="text-4xl font-bold mb-6 text-center">회원가입</h1>
        <AuthForm>
          <AuthInput />
          <AuthInput />
          <AuthInput />
          <AuthBtn content="회원가입" />
        </AuthForm>
      </AuthContainer>
    </div>
  );
};

export default SignUp;
