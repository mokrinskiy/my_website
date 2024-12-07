"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const HomeLinks = () => {
    const pathname = usePathname();

    return (
        <div className="w-full h-[7vh] py-1 z-10 bg-black justify-around items-center flex sticky bottom-0 px-5">
            <Link href={"portraits"}>
                <Button
                    className={`text-white ${
                        pathname === "/portraits" ? "underline" : ""
                    }`}
                    variant={"link"}
                >
                    <h1 className="text-[20px] uppercase font-thin max-md:text-[15px]">
                        Portraits
                    </h1>
                </Button>
            </Link>
            <Link href={"landscapes"}>
                <Button
                    className={`text-white ${
                        pathname === "/landscapes" ? "underline" : ""
                    }`}
                    variant={"link"}
                >
                    <h1 className="text-[20px] uppercase font-thin max-md:text-[15px]">
                        Landscapes
                    </h1>
                </Button>
            </Link>
        </div>
    );
};

export default HomeLinks;
