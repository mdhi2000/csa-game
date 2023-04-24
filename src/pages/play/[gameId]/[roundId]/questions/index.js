import Glassmorphism from "@/components/glassmorphism"
import ProgressBar from "@/components/progressbar"
import Wrapper from "@/components/wrapper"
import { Button, Group, Image, Progress, Text } from "@mantine/core"

export default function Start() {
  return (
    <Wrapper bgIcon as="play" className="flex flex-col items-center gap-6 py-[10px]">
      <Progress dir="ltr" className="w-[100%]" radius="xl" size="xl" value={50} />
      <Text fw={700} sz="18px" lh="28px">
        به مسابقه خوش اومدی
      </Text>
      <Glassmorphism className="flex flex-col justify-around items-center pt-8 pb-5 px-6 gap-4 w-[calc(100%-50px)] h-full">
        
      </Glassmorphism>
    </Wrapper>
  )
}
