import Icon from "@/assets/svg/login.svg";
import Image from "next/image";

const SignIn = () => {
  return (
    <button className="px-6 py-3 rounded-[40px] flex items-center gap-2" style={{ background: "linear-gradient(90deg, #0E1D5D 0%, #451788 100%)" }}>
      <span className="text-white font-normal text-base">შესვლა</span>
      <Image src={Icon} alt="login" />
    </button>
  );
};

export default SignIn;
