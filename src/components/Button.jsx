import PropTypes from "prop-types";


export default function Button({
    textColor = "#ffffff",
    bgColor = "#6C63FF",
    className = "",
    onclick,
    children
}) {


  return (
    <button 
        onClick={onclick}
        className={className ? className : `py-1 px-2 rounded-md`} 
        style={{
            backgroundColor: `${bgColor}`,
            color: `${textColor}`,
        }}
    >
        {children}
    </button>
  )
}



Button.propTypes = {
    onclick: PropTypes.func,
    className: PropTypes.string,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    children: PropTypes.node,
}