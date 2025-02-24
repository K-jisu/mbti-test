import React from "react";
import CommonContainer from "../components/Common/CommonContainer";
import CommonForm from "../components/Common/CommonForm";
import CommonInput from "../components/Common/CommonInput";
import CommonBtn from "../components/Common/CommonBtn";
import { useState } from "react";
import { updateProfile } from "../api/auth";
import useUserStore from "../zustand/userStorage";

const Profile = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [updateNickName, setUpdateNickName] = useState("");
  const accessToken = useUserStore((state) => state.accessToken);

  const handleUpdate = async () => {
    try {
      const res = await updateProfile({ updateNickName, accessToken });
      setUser({ ...user, nickname: updateNickName });
      alert("닉네임 변경이 되었습니다.");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUpdateNickName(e.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <CommonContainer>
        <h1 className="text-4xl font-bold mb-6 text-center">프로필 수정</h1>
        <CommonForm onSubmit={handleUpdate}>
          <label htmlFor="updateInput">닉네임</label>
          <CommonInput
            id="updateInput"
            type="text"
            name="nickName"
            value={updateNickName}
            placeholder="변경할 닉네임을 입력해 주세요"
            onChange={handleChange}
          />
          <CommonBtn type="submit" content="프로필 업데이트"></CommonBtn>
        </CommonForm>
      </CommonContainer>
    </div>
  );
};

export default Profile;
