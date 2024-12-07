"use client";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Image from "next/image";

export default function Home() {
    useSmoothScroll();
    return (
        <div className="flex justify-center items-center w-full min-h-[86vh]">
            <div className="w-[300px] h-[300px] relative">
                <Image
                    src={`/images/main.jpg`}
                    alt={`Main`}
                    sizes="100vw" // Указание на всю ширину
                    fill
                    style={{ objectFit: "cover" }} // Изображение заполняет контейнер
                />
            </div>
        </div>
    );
}
