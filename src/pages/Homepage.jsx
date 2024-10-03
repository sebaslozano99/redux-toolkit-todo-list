import { useIsAddingTask } from "../contexts/isAddingTaskContext";
import PropTypes from "prop-types";
import Modal from "../components/Modal";



export default function Homepage({children}) {

  const { isAddingTask } = useIsAddingTask();


  return (
    <main className={`w-full h-screen bg-white relative z-10 transition-all duration-300 ease-out`} >
      {children}
      {isAddingTask && <Modal />}
    </main>
  )
}


Homepage.propTypes = {
    children: PropTypes.node,
}