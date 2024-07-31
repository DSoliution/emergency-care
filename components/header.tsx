import Image from "next/image";

export default function Header(){
    return (
        <header className="h-[70px] bg-white w-full border-b-[1px]">
            <div className="max-w-[280px] w-full h-full flex items-center p-5 gap-y-5">
                <Image width={60} height={60} src={"/assets/img/logo.jpeg"} alt="logo" />
                <p className="font-bold text-xl self-end">HMS Panel</p>
            </div>
        </header>
    )
}