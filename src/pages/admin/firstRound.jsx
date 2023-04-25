import React from 'react';
import Wrapper from "@/components/wrapper";
import Glassmorphism from "@/components/glassmorphism";
import {Image, Text} from "@mantine/core";

const FirstRound = () => {
    return (
        <div>
            <Wrapper className="mt-10" bgIcon>
                <div className="px-32 w-full">
                    <div className="grid grid-cols-3 gap-5">
                        <div>
                            <Glassmorphism
                                className="bg-white p-5 flex flex-col">
                                <div className="flex flex-row justify-between">
                                    <Text color="rgba(34, 158, 217, 1)" fz="18px" fw="500px">
                                        در حال پاسخ ...
                                    </Text>
                                    <Text fw={700} fz="26px" lts="10px" className="">
                                        401405033
                                    </Text>
                                </div>
                                <div className="flex flex-row justify-between mt-2">
                                    <Text fw={500} fz="16px" lh="25px" lts="2px" align="center" color="#6E7EA6">
                                        سوال 10/7
                                    </Text>
                                    <div className="flex flex-row">
                                        <Image src="/icons8_close.svg"></Image>
                                        <Image src="/icons8_close.svg"></Image>
                                    </div>
                                </div>
                            </Glassmorphism>
                        </div>
                        <div>
                            <Glassmorphism
                                className="bg-white p-5 flex flex-col opacity-70">
                                <div className="flex flex-row justify-between gap-20">
                                    <Text color="#FF1E60" fz="18px" fw="500px">
                                        حذف شده
                                    </Text>
                                    <Text fw={700} fz="26px" lts="10px" className="">
                                        401405033
                                    </Text>
                                </div>
                                <div className="flex flex-row justify-between gap-5 mt-2">
                                    <Text fw={500} fz="16px" lh="25px" lts="2px" align="center" color="#6E7EA6">
                                        سوال 10/7
                                    </Text>
                                    <div className="flex flex-row">
                                        <Image src="/icons8_close.svg"></Image>
                                        <Image src="/icons8_close.svg"></Image>
                                        <Image src="/icons8_close.svg"></Image>
                                    </div>
                                </div>
                            </Glassmorphism>
                        </div>
                        <div>
                            <Glassmorphism
                                className="w-full bg-white p-5 flex flex-col">
                                <div className="flex flex-row justify-between gap-20">
                                    <Text color="rgba(34, 158, 217, 1)" fz="18px" fw="500px">
                                        اتمام سوالات
                                    </Text>
                                    <Text fw={700} fz="26px" lts="10px" className="">
                                        401405033
                                    </Text>
                                </div>
                                <div className="flex flex-row justify-between gap-5 mt-2">
                                    <Text fw={500} fz="16px" lh="25px" lts="2px" align="center" color="#6E7EA6">
                                        سوال 10/7
                                    </Text>
                                    <div className="flex flex-row">
                                        <Image src="/icons8_close.svg"></Image>
                                        <Image src="/icons8_close.svg"></Image>
                                    </div>
                                </div>
                            </Glassmorphism>
                        </div>
                        <div>
                            <Glassmorphism
                                className="bg-white p-5 flex flex-col">
                                <div className="flex flex-row justify-between">
                                    <Text color="rgba(34, 158, 217, 1)" fz="18px" fw="500px">
                                        اتمام سوالات
                                    </Text>
                                    <Text fw={700} fz="26px" lts="10px" className="">
                                        401405033
                                    </Text>
                                </div>
                                <div className="flex flex-row justify-between gap-5 mt-2">
                                    <Text fw={500} fz="16px" lh="25px" lts="2px" align="center" color="#6E7EA6">
                                        سوال 10/7
                                    </Text>
                                    <div className="flex flex-row">
                                        <Image src="/icons8_close.svg"></Image>
                                        <Image src="/icons8_close.svg"></Image>
                                    </div>
                                </div>
                            </Glassmorphism>
                        </div>
                    </div>
                </div>

                <div className="fixed bottom-5 flex w-full justify-center">
                    <div>
                        <Glassmorphism
                            className="w-auto h-full bg-white p-5">
                            <div className="flex flex-row-reverse gap-10">
                                <div className="flex flex-col">
                                    <div className="justify-center items-center">
                                        <Text fw={900} fz="30px" lts="10px" color="#107EEB">
                                            10
                                        </Text>
                                        <Text fw={500} fz="14px" lh="25px" align="center" color="#6E7EA6">
                                            پایان بازی
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="justify-center items-center">
                                        <Text fw={900} fz="30px" lts="10px" color="#000">
                                            120
                                        </Text>
                                        <Text fw={500} fz="14px" lh="25px" align="center" color="#6E7EA6">
                                            شرکت کننده
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="justify-center items-center">
                                        <Text fw={900} fz="30px" lts="10px" color="#FF1E60">
                                            110
                                        </Text>
                                        <Text fw={500} fz="14px" lh="25px" align="center" color="#6E7EA6">
                                            حذف شده
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </Glassmorphism>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default FirstRound;