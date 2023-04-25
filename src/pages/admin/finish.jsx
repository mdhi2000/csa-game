import React from 'react';
import Wrapper from "@/components/wrapper";
import Glassmorphism from "@/components/glassmorphism";
import {Image, Text} from "@mantine/core";
import {Prism} from "@mantine/prism";

const LastRound = () => {
    return (
        <div>
            <Wrapper className="mt-10" bgIcon>
                <div className="w-full px-32">
                    <div className="grid grid-cols-3">
                        <div>
                            <Glassmorphism
                                className="h-full bg-white flex flex-col justify-around items-center pt-8 pb-5 px-7 gap-4 w-[calc(100%-62px)]">
                                <Text fw={400} fz={14}>
                                    شما در این دور مسابقه 10 سوال را در پیش رو دارید که اگر 3 سوال را اشتباه پاسخ دهید
                                    حذف
                                    خواهید شد و در غیر این صورت وارد دور بعد مسابقه میشوید
                                </Text>
                                {/*<Prism withLineNumbers language={"tsx"}>*/}
                                {/*    /!*{code}*!/*/}
                                {/*</Prism>*/}
                                <div className="grid grid-rows-4 gap-y-3">
                                    <Glassmorphism
                                        className="p-5 bg-white border flex flex-row items-center shadow-md hover:cursor-pointer hover:scale-105 hover:duration-300 border border-blue-500">
                                        <Text fw={500} fz={18} color="#107EEB">
                                            گزینه چهارم ... مثلا این یکی جوابش طولانی تره جوابش طولانی تره
                                        </Text>
                                    </Glassmorphism>
                                    <Glassmorphism
                                        className="p-3 bg-white border flex flex-row items-center shadow-md hover:cursor-pointer hover:scale-105 hover:duration-300">
                                        <Text fw={500} fz={18}>
                                            گزینه اول
                                        </Text>
                                    </Glassmorphism>
                                    <Glassmorphism
                                        className="p-3 bg-white border flex flex-row items-center shadow-md hover:cursor-pointer hover:scale-105 hover:duration-300">
                                        <Text fw={500} fz={18}>
                                            گزینه دوم
                                        </Text>
                                    </Glassmorphism>
                                    <Glassmorphism
                                        className="p-3 bg-white border flex flex-row items-center shadow-md hover:cursor-pointer hover:scale-105 hover:duration-300">
                                        <Text fw={500} fz={18}>
                                            گزینه سوم
                                        </Text>
                                    </Glassmorphism>
                                </div>
                            </Glassmorphism>

                        </div>
                        <div className="col-span-2">
                            <Text color="#000" fz={18} fw={800} className="mb-2">
                                جدول مسابقه
                            </Text>
                            <div className="grid gird-cols-1 gap-y-2">
                                <Glassmorphism
                                    className="bg-white p-2 border-[#F7AC06] border-2">
                                    <div className="flex flex-row justify-between items-center gap-20">
                                        <Text fw={700} fz="26px" lts="10px" className="">
                                            401405033
                                        </Text>
                                        <div className="flex flex-row items-center justify-center gap-x-10">
                                            <div className="relative top-0">
                                                <Image src="/Group-717-2.svg" class=""/>
                                            </div>
                                            <div className="ml-1">
                                                <Text color="#107EEB" fz="18px" fw="500px">
                                                    32" 2'
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </Glassmorphism>
                                <Glassmorphism
                                    className="bg-white p-2 border-[#A0A0A0] border-2">
                                    <div className="flex flex-row justify-between items-center gap-20">
                                        <Text fw={700} fz="26px" lts="10px" className="">
                                            401405033
                                        </Text>
                                        <div className="flex flex-row items-center justify-center gap-x-10">
                                            <div className="relative top-0">
                                                <Image src="/2nd-place-medal_1f948.svg" class=""/>
                                            </div>
                                            <div className="ml-1">
                                                <Text color="#107EEB" fz="18px" fw="500px">
                                                    26" 2'
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </Glassmorphism>
                                <Glassmorphism
                                    className="bg-white p-2 border-[#933D09] border-2">
                                    <div className="flex flex-row justify-between items-center gap-20">
                                        <Text fw={700} fz="26px" lts="10px" className="">
                                            401405033
                                        </Text>
                                        <div className="flex flex-row items-center justify-center gap-x-10">
                                            <div className="relative top-0">
                                                <Image src="/3rd-place-medal_1f949.svg" class=""/>
                                            </div>
                                            <div className="ml-1">
                                                <Text color="#107EEB" fz="18px" fw="500px">
                                                    16" 2'
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </Glassmorphism>
                                <Glassmorphism
                                    className="bg-white p-2">
                                    <div className="flex flex-row justify-between items-center gap-20">
                                        <Text fw={700} fz="26px" lts="10px" className="">
                                            401405033
                                        </Text>
                                        <div className="flex flex-row items-center justify-center gap-x-10">
                                            <div className="ml-1">
                                                <Text color="#107EEB" fz="18px" fw="500px">
                                                    10" 2'
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </Glassmorphism>
                                <Glassmorphism
                                    className="bg-white p-2">
                                    <div className="flex flex-row justify-between items-center gap-20">
                                        <Text fw={700} fz="26px" lts="10px" className="">
                                            401405033
                                        </Text>
                                        <div className="flex flex-row items-center justify-center gap-x-10">
                                            <div className="ml-1">
                                                <Text color="#107EEB" fz="18px" fw="500px">
                                                    05" 2'
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </Glassmorphism>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default LastRound;