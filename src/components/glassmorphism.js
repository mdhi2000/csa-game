export default function Glassmorphism({ children, className, as, backgroundColor, ...props }) {
  return (
    <div
      className={`bg-[rgba(47,57,99,0.4)] backdrop-blur-[5px] rounded-[20px] ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  )
}
