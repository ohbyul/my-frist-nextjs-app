import Tab from "./Tab";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Tab />
      {children}
    </div>
  )
}
