"use client"

import { Avatar, Button, ScrollArea } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { Icon, IconClipboardHeart, IconDashboard , IconHome, IconProps, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, Fragment, RefAttributes } from "react";

interface ISlideSection{
    section:string;
    items:{
        icon:ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
        label:string;
        route:string;
        iconClass:string;
    }[]
}

export default function Slide(){
    const path = usePathname();
    const { ref, height } = useElementSize();
    const slideSections:ISlideSection[] = [
        {
            section:"dashboard",
            items:[
                {
                    icon:IconHome,
                    label:"Home",
                    route:"/admin",
                    iconClass:"bg-blue-600/20 stroke-blue-600"
                },
                {
                    icon:IconUser,
                    label:"Patient",
                    route:"/admin/patients",
                    iconClass:"bg-green-600/20 stroke-green-600"
                },
                {
                    icon:IconClipboardHeart,
                    label:"Medical Records",
                    route:"/admin/medical-records",
                    iconClass:"bg-purple-600/20 stroke-purple-600"
                }
            ]
        }
    ]
    return (
        <div ref={ref} className="h-[calc(100vh-70px)] bg-white max-w-[280px] w-[80%] border-r-[1px]">
            <ScrollArea h={height-60} className="p-5">
                {slideSections.map(({section,items},index)=>(
                    <Fragment key={index}>
                        <p className="uppercase text-[10px] font-bold tracking-widest text-slate-500">{section}</p>
                        <div className="py-3 flex flex-col gap-y-2">
                            {items.map(({icon:SlideIcon,label,route,iconClass},index)=>(
                                <Button key={index} component={Link} href={route} leftSection={<SlideIcon size={28} className={`${iconClass} rounded-md p-1`}/>} variant="default" classNames={{root:`${path==route && "bg-slate-100"} w-full rounded-md border-none`,inner:"justify-start",label:"text-md"}}>{label}</Button>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </ScrollArea>
            <div className="h-[60px] w-full flex items-center p-5 gap-4 border-t-[1px] cursor-pointer">
                <Avatar size={"md"} src={"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"}/>
                <div>
                    <p className="text-sm">Amy Horsefighter</p>
                    <p className="text-xs">ahorsefighter@gmail.com</p>
                </div>
            </div>
        </div>
    )
}