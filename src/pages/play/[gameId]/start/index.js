import Glassmorphism from "@/components/glassmorphism"
import Wrapper from "@/components/wrapper"
import { Button, Group, Image, Text } from "@mantine/core"

export default function Start() {
  return (
    <Wrapper bgIcon as="play" className="flex flex-col justify-around items-center">
      <Text fw={900} fz="25px" lh="39px" color="#6E7EA6" fs="normal" lts="0.37em">
        97407003
      </Text>
      <Text fw={700} sz="18px" lh="28px">
        به مسابقه خوش اومدی
      </Text>
      <Glassmorphism className="flex flex-col justify-around items-center pt-8 pb-5 px-7 gap-4 w-[calc(100%-62px)]">
        <Text fw={900} fz="31px" lh="49px">
          دور اول مسابقه
        </Text>
        <Text fw={500} fz="16px" lh="25px" align="center" color="#6E7EA6">
          همه شرکت کننده ها
        </Text>
        <div className="flex flex-col items-center">
          <Image src="/questions.svg" alt="questions" className="w-[50%]" />
          <Text fw={700}>10 سوال</Text>
          <Text fw={500} color="#6E7EA6" fz={14}>
            8 دقیقه
          </Text>
        </div>
        <Text fw={400} fz={14}>
          شما در این دور مسابقه 10 سوال را در پیش رو دارید که اگر 3 سوال را اشتباه پاسخ دهید حذف
          خواهید شد و در غیر این صورت وارد دور بعد مسابقه میشوید
        </Text>
      </Glassmorphism>
      <Text fw={400} mx="45px" fz="14px" align="center" color="#6E7EA6">
        اگر 3 نفر یا کمتر در این دور بمانند اخرین 3 نفر برنده هستند
      </Text>
      <Group w="100%" px="20px">
        <Button
          type="submit"
          className="!rounded-[20px]"
          h="49px"
          fullWidth
          // loading={loginMutation.isLoading}
        >
          شروع
        </Button>
      </Group>
    </Wrapper>
  )
}
