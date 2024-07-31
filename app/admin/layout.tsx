import Header from "@/components/header";
import Slide from "@/components/slide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMS | Dashboard",
  description: "",
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-50">
      <Header/>
      <div className="flex flex-row">
        <Slide/>
        {children}
      </div>
    </div>
  );
}
