import React from "react";
import ProfileTitle from "./profile-title/ProfileTitle";
import ProfileRightCard from "./profile-card/ProfileRightCard";
import ProfileLeftCard from "./profile-card/ProfileLeftCard";

export const Profile = () => {
  return (
    <>
      <header>
        <ProfileTitle/>
      </header>
      <main className="flex items-center gap-1 mx-2 my-2 ">
        <ProfileRightCard/>
        <ProfileLeftCard/>
      </main>
    </>
  );
};
