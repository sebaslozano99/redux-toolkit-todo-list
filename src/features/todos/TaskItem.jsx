import PropTypes from "prop-types";



export default function TaskItem({info}) {

  return (
    <li className="border-b border-b-slate-950/40 cursor-pointer py-4 flex items-center gap-4" >
        <input type="checkbox" className="cursor-pointer accent-[#6C63FF] w-4 h-4" defaultChecked={info.isCompleted} />
        <p>{info.task}</p>
    </li>
  )
}



TaskItem.propTypes = {
  info: PropTypes.object,
}