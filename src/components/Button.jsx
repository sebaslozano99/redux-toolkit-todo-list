import PropTypes from "prop-types";
import { useDarkMode } from "../contexts/DarkModeContext";




export default function Button({
    backgroundColor = "",
    textColor = "",
    type = "main",
    onclick,
    className = "",
    children
}) {

    const { isDark } = useDarkMode();

    const baseStyles = `flex justify-center items-center rounded-md py-1 px-2`;

    const styles = {
        main: baseStyles + ` text-white bg-[#6C63FF]`,
        secondary: baseStyles + ` text-[#6c63ff] ${isDark ? "bg-[#252525]" : "bg-white"} border-2 border-[#6C63FF]`,
        rounded: "absolute left-[76%] bottom-4 px-3 py-1 h-10 w-10 text-white bg-[#6c63ff] rounded-full",
    }





    if(className) return (
        <button 
            className={className}
            onClick={onclick}
        >
            {children}
        </button>
    )

    //if props for textColor and bgColor are received, since inline-styles have higher precedence, they'll override those styles passed in the className
  return (
    <button 
        style={{
            backgroundColor: backgroundColor,
            color: textColor,   
        }}
        onClick={onclick}
        className={styles[type]} 
    >
        {children}
    </button>
  )
}



Button.propTypes = {
    onclick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
}