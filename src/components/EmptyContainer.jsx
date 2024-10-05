import { useDarkMode } from "../contexts/DarkModeContext";
import svgImage from "../../public/empty.svg";
import PropTypes from "prop-types";

export default function EmptyContainer({children}) {
  
  const { isDark } = useDarkMode();

  return (
    <section className={`w-full h-[80%] flex flex-col justify-center items-center relative`} >
      <img src={svgImage} alt="empty" className="w-2/6" />
      <p className={`${isDark ? "text-white" : ""}`} >Empty...</p>

      {children}
    </section>
  )
}


EmptyContainer.propTypes = {
    children: PropTypes.node,
}