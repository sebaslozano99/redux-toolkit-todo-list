import { useIsAddingTask } from "../contexts/isAddingTaskContext";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Modal from "../components/Modal";
import { useEffect } from "react";


export default function Homepage({children}) {

  const { isAddingTask } = useIsAddingTask();
  const { todos } = useSelector((store) => store.todos);
  const taskUpdating = todos.find((todo) => todo.isUpdating);


  useEffect(() => {
    console.log(taskUpdating);
  }, [taskUpdating]);

  return (
    <main className={`w-full h-screen bg-white relative z-10 transition-all duration-300 ease-out`} >
      {children}
      {isAddingTask && <Modal />}
      {taskUpdating && <Modal initialState={taskUpdating} />}
    </main>
  )
}


Homepage.propTypes = {
    children: PropTypes.node,
}