import { useSelector } from "react-redux";
import { useIsAddingTask } from "../../contexts/IsAddingTaskContext";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import Button from "../../components/Button";
import EmptyContainer from "../../components/EmptyContainer";



export default function TasksContainer() {

  const { todos } = useSelector((store) => store.todos);
  const { startAddingTask: setIsAddingTask } = useIsAddingTask();


  if(!todos.length) return (
    <EmptyContainer>
      <Button type="rounded" onclick={setIsAddingTask} >&#x2b;</Button>
    </EmptyContainer>
  )


  return (
    <section className="w-full h-[80%] relative" >

      <ul className="mx-auto w-3/6 h-full p-2 overflow-auto" >
        {
          todos.map((todo) => <TaskItem key={todo.id} info={todo} />)
        }
      </ul>

      <Button type="rounded" onclick={setIsAddingTask} >&#x2b;</Button>

    </section>
  )
}


TasksContainer.propTypes = {
  setIsAddingTask: PropTypes.func,
}