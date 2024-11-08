import { auth } from "@/next_auth/auth";
import React from "react";

const CMSUser = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    return null;
  } else {
    return <p>{user.name}</p>;
  }
};

export default CMSUser;
