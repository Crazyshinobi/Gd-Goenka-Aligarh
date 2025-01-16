  import React, { useState } from "react";
  import { UserSidebar } from "./UserSidebar";
  import { Usernavbar } from "./UserNavbar";

  export const UserLayout = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
      <>
        <Usernavbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <UserSidebar mobileMenu={mobileMenu} />
      </>
    );
  };
