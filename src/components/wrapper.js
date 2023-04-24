import { Image } from "@mantine/core"

export default function Wrapper({ children, rootClasses, className, as, el, bgIcon, ...props }) {
  const Element = el || "div"
  return (
    <Element
      className={`h-screen${
        as === "play"
          ? "bg-[rgba(37,44,74,1)] text-[#ffffff]"
          : "bg-[rgba(234,240,245,1)] text-[#1F2541]"
      } ${rootClasses}`}
      {...props}
    >
      <div
        className={`-z-10 ${
          as === "play"
            ? "bg-[rgba(37,44,74,1)] text-[#ffffff]"
            : "bg-[rgba(234,240,245,1)] text-[#1F2541]"
        } px-[25%] w-full h-full fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center`}
      >
        {bgIcon && <Image className="" w="50%" src="/Logo.svg" alt="Logo"></Image>}
      </div>
      <div className={`h-screen ${className}`}>{children}</div>
    </Element>
  )
}
