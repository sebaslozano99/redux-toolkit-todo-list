import { useSelector } from "react-redux";
import { useIsAddingTask } from "../../contexts/IsAddingTaskContext";
import { useFilter } from "../../contexts/FilterContext";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import Button from "../../components/Button";
import EmptyContainer from "../../components/EmptyContainer";



export default function TasksContainer() {

  const { todos, search } = useSelector((store) => store.todos);
  const { startAddingTask: setIsAddingTask } = useIsAddingTask();
  const { filter } = useFilter();
  const filteredTodos = todos.filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase()));


  if(
    !todos.length || 
    filter === "pending" && !todos.filter((todo) => !todo.isCompleted).length  || 
    filter === "completed" && !todos.filter((todo) => todo.isCompleted).length
  ) return (
    <EmptyContainer>
      <Button type="rounded" onclick={setIsAddingTask} >&#x2b;</Button>
    </EmptyContainer>
  )


  return (
    <section className="w-full h-[80%] relative" >

      <ul className="mx-auto w-3/6 h-full p-2 overflow-auto" >

        {
          filter === "all" && filteredTodos.map((todo) => <TaskItem key={todo.id} info={todo} />)
        }

        {
          filter === "pending" && filteredTodos.filter((todo) => !todo.isCompleted).map((todo) => <TaskItem key={todo.id} info={todo} />)
        }

        {
          filter === "completed" && filteredTodos.filter((todo) => todo.isCompleted).map((todo) => <TaskItem key={todo.id} info={todo} />)
        }

      </ul>

      <Button type="rounded" onclick={setIsAddingTask} >&#x2b;</Button>

    </section>
  )
}


TasksContainer.propTypes = {
  setIsAddingTask: PropTypes.func,
}