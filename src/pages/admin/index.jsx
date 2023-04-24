import Wrapper from "@/components/wrapper";
import {Button, Divider, Image, Text} from "@mantine/core";
import Glassmorphism from "@/components/glassmorphism";

const gifts = [
    {
        title: "نفر اول",
        icon: "/1st_place.png",
    },
    {
        title: "نفر دوم",
        icon: "/2nd_place.png",
    },
    {
        title: "نفر سوم",
        icon: "/3rd_place.png",
    },
]

const Admin = () => {
    return (
        <Wrapper className="flex justify-between items-center gap-5" bgIcon>
            <div className="w-[30%] h-full rounded p-5">
                <Glassmorphism className="h-full bg-white flex flex-col justify-around items-center pt-8 pb-5 px-7 gap-4 w-[calc(100%-62px)]">
                    <Text fw={900} fz="31px" lh="49px">
                        دور اول مسابقه
                    </Text>
                    <Text fw={500} fz="16px" lh="25px" align="center" color="#6E7EA6">
                        همه شرکت کننده ها
                    </Text>
                    <div className="flex flex-col items-center">
                        <Image src="/icons8_questions_1.svg" alt="questions" className="w-[50%]" />
                        <Text fw={700}>10 سوال</Text>
                        <Text fw={500} color="#6E7EA6" fz={14}>
                            8 دقیقه
                        </Text>
                    </div>
                    <Text fw={400} fz={14}>
                        شما در این دور مسابقه 10 سوال را در پیش رو دارید که اگر 3 سوال را اشتباه پاسخ دهید حذف
                        خواهید شد و در غیر این صورت وارد دور بعد مسابقه میشوید
                    </Text>
                    <Divider my="sm" w="100%"/>
                    <Text color="rgba(34, 158, 217, 1)" className="px-9" w="100%">
                        جایزه های مسابقه
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[100%] px-5 gap-3">
                        {gifts.map((item, i) => (
                            <div key={i} className="bg-white shadow-lg rounded-[20px] px-2 py-1 flex flex-col items-center">
                                <div className="flex items-center gap-2 justify-around">
                                    <div className="rounded-full bg-[#EAF0F5] bg-opacity-[0.35] w-[33px] h-[33px] flex items-center justify-center p-1">
                                        <Image src={item.icon} alt="icon" />
                                    </div>
                                    <Text fw={700} fz={12}>
                                        {item.title}
                                    </Text>
                                </div>
                                <Image src={item.src || "/no_picture.svg"} alt="image" />
                            </div>
                        ))}
                    </div>
                </Glassmorphism>
            </div>
            <div className="bg-transparent">
                <div className="bg-gray-100 rounded-3xl">
                    <Image className="" w="50%" src="/qr-code.svg" alt="Logo"></Image>
                </div>
                <Button
                    type="submit"
                    className="!rounded-xl bg-blue-400 mt-5"
                    h="49px"
                    fullWidth
                    // loading={loginMutation.isLoading}
                >
                    شروع
                </Button>
            </div>
            <div></div>
        </Wrapper>
    );
};

export default Admin;