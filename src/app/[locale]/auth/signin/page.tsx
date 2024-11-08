"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Google from "@/assets/png/google.png";
import Image from "next/image";

const page = () => {
  const callBackUrl = useSearchParams().get("callbackUrl") || "";
  const handleClick = () => {
    signIn("google", { callbackUrl: callBackUrl });
  };
  return (
    <main className="w-full h-[100dvh] flex items-center justify-center bg-blue">
      <button className="w-[300px] py-4 bg-white rounded-3xl font-semibold flex items-center justify-center gap-2" onClick={handleClick}>
        <Image className="w-[24px]" src={Google} alt="Google"/>
        <span>Sign In with Google</span>
      </button>
    </main>
  );
};

export default page;
