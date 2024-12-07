"use client";
import { images } from "@/content/images";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Image from "next/image";
import React from "react";

const Page = () => {
    useSmoothScroll();
    return (
        <div className="gap-14 flex-col w-full flex items-center h-full my-5">
            {images.landscapes.map((image, index) => (
                <div
                    key={index}
                    className="relative w-[80%] max-lg:w-[90%] max-md:w-full"
                    style={{ aspectRatio: "16 / 9" }}
                >
                    <Image
                        src={`/photos/landscapes/${image}`}
                        alt={`Landscape ${index + 1}`}
                        sizes="100vw" // Указание на всю ширину
                        fill
                        style={{ objectFit: "cover" }} // Изображение заполняет контейнер
                    />
                </div>
            ))}
        </div>
    );
};

export default Page;
