import LoginForm from "@/components/form/login";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-full h-full  flex justify-center items-center">
        <LoginForm/>
      </div>
      <div className="w-full h-full relative hidden lg:block">
        <Image fill className="object-cover" src={"/assets/img/login-banner.jpg"} alt="" />
      </div>
    </div>
  );
}
