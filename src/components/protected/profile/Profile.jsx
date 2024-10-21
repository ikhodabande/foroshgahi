import React from "react";
import ProfileTitle from "./profile-title/ProfileTitle";
import ProfileRightCard from "./profile-card/ProfileRightCard";
import ProfileLeftCard from "./profile-card/ProfileLeftCard";
import ProfileCenterCard from "./profile-card/ProfileCenterCard";

export const Profile = () => {
  return (
    <>
      <header>
        <ProfileTitle />
      </header>
      <main className="flex flex-col items-center gap-2 mx-2 my-2 ">
        <div className="flex items-center ">
          <ProfileRightCard />
          <ProfileLeftCard />
        </div>
        <ProfileCenterCard />
      </main>
    </>
  );
};
