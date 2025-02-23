import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import CommonContainer from "../components/Common/CommonContainer";
import CommonForm from "../components/Common/CommonForm";
import CommonInput from "../components/Common/CommonInput";
import CommonBtn from "../components/Common/CommonBtn";

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
      <CommonContainer>
        <h1 className="text-4xl font-bold mb-6 text-center">회원가입</h1>
        <CommonForm onSubmit={handleRegister}>
          <CommonInput
            type="text"
            name="id"
            value={signUpData.id}
            onChange={handleChange}
            placeholder="아이디"
          />
          <CommonInput
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="비밀번호"
          />
          <CommonInput
            type="text"
            name="nickname"
            onChange={handleChange}
            placeholder="닉네임"
          />
          <CommonBtn content="회원가입" type="submit" />
        </CommonForm>
      </CommonContainer>
    </div>
  );
};

export default Signup;
