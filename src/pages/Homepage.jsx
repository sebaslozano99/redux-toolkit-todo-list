import { useSelector } from "react-redux";
import { useIsAddingTask } from "../contexts/IsAddingTaskContext";
import { useDarkMode } from "../contexts/DarkModeContext";
import PropTypes from "prop-types";
import Modal from "../components/Modal";


export default function Homepage({children}) {

  const { isDark } = useDarkMode();
  const { isAddingTask } = useIsAddingTask();
  const { todos } = useSelector((store) => store.todos);
  const taskUpdating = todos.find((todo) => todo.isUpdating);


  return (
    <main className={`relative z-10 w-full h-screen ${isDark ? "bg-[#252525]" : "bg-white"} transition-all duration-300 ease-out`} >
      {children}
      {isAddingTask && <Modal />}
      {taskUpdating && <Modal initialState={taskUpdating} />}
    </main>
  )
}


Homepage.propTypes = {
    children: PropTypes.node,
}