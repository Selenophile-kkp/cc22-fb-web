import PostContainer from "@/components/PostContainer";
import SidebarContact from "@/components/SidebarContact";
import SidebarMenu from "@/components/SidebarMenu";
import React from "react";

function Home() {
  return (
    <>
      <SidebarMenu />
      <PostContainer />
      <SidebarContact />
    </>
  );
}

export default Home;
