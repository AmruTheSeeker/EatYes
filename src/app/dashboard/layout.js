import { Provider } from "@/components/Provider/Provider";

export default function Layout({ children }) {
  return (
  <div className="max-w-sm m-auto">
    <Provider>{children}</Provider>
  </div>
  )

}
