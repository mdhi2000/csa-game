import "@/styles/globals.css"
import Head from "next/head"
import { MantineProvider, createEmotionCache } from "@mantine/core"
import stylisRTLPlugin from "stylis-plugin-rtl"
import axios from "axios"
import { Notifications } from "@mantine/notifications"
import { QueryClient, QueryClientProvider } from "react-query"

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [stylisRTLPlugin],
})

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Unigame | یونی گیم</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={rtlCache}
          theme={{
            dir: "rtl",
            fontFamily: "IRANSans",
            colorScheme: "dark"
          }}
        >
          <Notifications position="top-center" />
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
    </>
  )
}
