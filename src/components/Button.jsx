import PropTypes from "prop-types";




export default function Button({
    type = "main",
    textColor = "#ffffff",
    bgColor = "#6C63FF",
    className = "",
    onclick,
    children
}) {


    const baseStyles = "py-1 px-2 rounded-md";

    const styles = type === "main" ? 
        `bg-[${bgColor}] text-[${textColor}]` 
        :
        `bg-[${textColor}] text-[${bgColor}] border-2 border-[${bgColor}]`;


  return (
    <button 
        onClick={onclick}
        className={`${baseStyles} ${styles} ${className}`} 
        style={type === "main" ? {color: textColor} : {color: bgColor}}
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
    bgColor: PropTypes.string,
    children: PropTypes.node,
}