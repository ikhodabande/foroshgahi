import React from "react";
import ProfileTitle from "./profile-title/ProfileTitle";
import ProfileRightCard from "./profile-card/ProfileRightCard";
import ProfileLeftCard from "./profile-card/ProfileLeftCard";
import ProfileCenterCard from "./profile-card/ProfileCenterCard";

export const Profile = () => {
  return (
    <>
      <header className="fixed left-[50%] -translate-x-[50%] bg-white h-[30vh] z-10">
        <ProfileTitle />
      </header>
      <main className="flex flex-col items-center gap-2 mx-2 my-2 pt-[140px]  ">
        <div className="flex items-center fixed  z-10">
          <ProfileRightCard />
          <ProfileLeftCard />
        </div>
        <div className="pt-[155px] pb-[55px]">
        <ProfileCenterCard />
        </div>
      </main>
    </>
  );
};
