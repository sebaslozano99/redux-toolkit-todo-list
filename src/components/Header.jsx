import { useDarkMode } from "../contexts/DarkModeContext";


export default function Header() {

  const { isDark } = useDarkMode();

  return (
    <header className="flex  items-center justify-center py-4 w-full h-[10%]" >
        <h1 className={`font-bold text-4xl ${isDark ? "text-white" : ""}`} >TODOLIST</h1>
    </header>
  )
}
