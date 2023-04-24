import Wrapper from "@/components/wrapper"
import { p2e } from "@/helpers/numberConverter"
import { Button, Group, Image, PinInput, Text, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useLocalStorage } from "@mantine/hooks"
import { notifications } from "@mantine/notifications"
import axios from "axios"
import { useRouter } from "next/router"
import { useMutation } from "react-query"

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

export default function JoinGame() {
  const router = useRouter()
  const { gameId } = router.query
  const [playerId, setPlayerId] = useLocalStorage({ key: "player-id", defaultValue: null })
  const [token, setToken] = useLocalStorage({ key: "token", defaultValue: null })

  const loginMutation = useMutation(values => axios.post("/player/start", values))

  const form = useForm({
    initialValues: {
      playerCode: "",
    },
    validate: {
      playerCode: value =>
        /^(99|400|401)40(5|7)\d{3}$/.test(p2e(value)) ? null : "شماره دانشجویی وارد شده معتبر نیست",
    },
  })

  return (
    <Wrapper
      el="form"
      as="play"
      className="flex flex-col justify-around items-center"
      onSubmit={form.onSubmit(({ playerCode }) => {
        loginMutation
          .mutateAsync({ gameId, playerCode: p2e(playerCode) })
          .then(data => {
            if (!data.data?.token)
              return notifications.show({
                message: "خطا در ورود به بازی: " + data.data,
                color: "red",
              })
            setPlayerId(data.data?.playerId)
            setToken(data.data.token)
            router.replace("/play/" + gameId + "/start")
          })
          .catch((err) =>
            notifications.show({
              message: "خطا در ورود به بازی",
              color: "red",
            })
          )
      })}
    >
      <div className="relative w-[50%]">
        <Image src="/Logo.svg" alt="Logo"></Image>
        <Image
          src="/ask_question.svg"
          alt="Logo"
          className="absolute -top-[5%] scale-[80%]"
        ></Image>
      </div>
      <Text fw={700} fz={18}>
        آماده ای ؟
      </Text>
      <Text color="rgba(110, 126, 166, 1)" align="justify" className="mx-8" fw={400} fz={14}>
        قراره یه سری سوال ازت پرسیده بشه که درمورد اطلاعات عمومی برنامه نویسی و کامپیوتر و حتی در
        مورد مسائل آموزشی که امروز مطرح شد باشن
      </Text>
      <Text color="rgba(34, 158, 217, 1)" className="px-9" w="100%">
        جایزه ها
      </Text>
      <div className="flex flex-row items-center justify-between w-[100%] px-5 gap-3">
        {gifts.map((item, i) => (
          <div key={i} className="bg-[#2F3963] rounded-[20px] px-2 py-1 flex flex-col items-center">
            <div className="flex items-center gap-2 justify-around">
              <div className="rounded-full bg-[#1F2541] bg-opacity-[0.35] w-[33px] h-[33px] flex items-center justify-center p-1">
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
      <Text className="mx-9" align="center" fw={700} fz={14}>
        برای شروع مسابقه نیازه که شماره دانشجوییت رو وارد کنی
      </Text>
      <TextInput
        {...form.getInputProps("playerCode")}
        sx={{
          input: {
            backgroundColor: "rgba(37,44,74,1)",
            border: "2px solid #254568",
            borderRadius: "16px",
            height: "55px",
            color: "#fff",
          },
        }}
        placeholder="شماره دانشجویی"
        className="w-[90%]"
      />
      <Group w="100%" px="20px">
        <Button
          type="submit"
          className="!rounded-[20px]"
          h="49px"
          fullWidth
          loading={loginMutation.isLoading}
          leftIcon={<Image src="/arrowright.svg" alt="icon" />}
        >
          بــزن بریــم
        </Button>
      </Group>
    </Wrapper>
  )
}
