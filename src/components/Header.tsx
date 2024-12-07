import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { InstagramIcon, Send } from "lucide-react";

const Header = () => {
    return (
        <div className="h-[7vh] py-1 z-10 w-full justify-between sticky top-0 flex items-center px-5 text-white gap-10 bg-black ">
            <div>
                <Link href="/">
                    <Button className="text-white" variant={"link"}>
                        <h1 className="text-[20px] uppercase font-thin max-md:text-[15px]">
                            Mokrinskiy
                        </h1>
                    </Button>
                </Link>
            </div>
            <div className="gap-2 flex">
                <Link href="https://t.me/mokrinskiy" target="_blank">
                    <Button variant={"ghost"} size="icon">
                        <Send />
                    </Button>
                </Link>
                <Link
                    href="https://www.instagram.com/mokrinskiy_/"
                    target="_blank"
                >
                    <Button variant={"ghost"} size={"icon"}>
                        <InstagramIcon />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
