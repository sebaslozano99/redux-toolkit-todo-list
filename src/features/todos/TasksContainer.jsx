import { useSelector } from "react-redux";
import { useIsAddingTask } from "../../contexts/isAddingTaskContext";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import Button from "../../components/Button";
import svgImage from "../../../public/empty.svg";



export default function TasksContainer() {

  const { todos } = useSelector((store) => store.todos);
  const { isAddingTask, startAddingTask: setIsAddingTask } = useIsAddingTask();


  if(!todos.length) return <section className={`w-full h-[80%] flex flex-col justify-center items-center relative ${isAddingTask ? "" : ""}`} >
      <img src={svgImage} alt="empty" className="w-2/6" />
      <p>Empty...</p>

      <Button className="h-10 w-10 absolute left-[76%] bottom-4 px-3 py-1 rounded-full" onclick={setIsAddingTask} >&#x2b;</Button>
  </section>


  return (
    <section className="w-full h-[80%] relative" >

      <ul className="mx-auto w-3/6 h-full p-2" >
        {
          todos.map((todo) => <TaskItem key={todo.id} info={todo} />)
        }
      </ul>

      <Button className="h-10 w-10 absolute left-[76%] bottom-4 px-3 py-1 rounded-full" onclick={setIsAddingTask} >&#x2b;</Button>

    </section>
  )
}


TasksContainer.propTypes = {
  setIsAddingTask: PropTypes.func,
}