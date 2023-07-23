import React, { useContext } from "react";
import { CommentSection } from "react-comments-section";

import { UserContext } from "../../context/user.context";

import "react-comments-section/dist/index.css";

const CommentComponent = () => {
  const { user } = useContext(UserContext);
  const data = [
    {
      userId: "02b",
      comId: "017",
      fullName: "Lily",
      userProfile: "https://www.linkedin.com/in/daniyal-tayyab-77880015a/",
      text: "I like this product very much!🤔",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: [],
    },
  ];
  return (
    <CommentSection
      currentUser={{
        currentUserId: "01a",
        currentUserImg:
          "https://ui-avatars.com/api/name=Riya&background=random",
        currentUserProfile:
          "https://www.linkedin.com/in/daniyal-tayyab-77880015a/",
        currentUserFullName: user,
      }}
      logIn={{
        loginLink: "http://localhost:3001/",
        signupLink: "http://localhost:3001/",
      }}
      commentData={data}
      onSubmitAction={(productDetailArray) =>
        console.log("check submit, ", data)
      }
      currentData={(data) => {
        console.log("curent data", data);
      }}
    />
  );
};

export default CommentComponent;
