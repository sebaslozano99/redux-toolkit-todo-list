import { useState } from "react";
import { useIsAddingTask } from "../../contexts/isAddingTaskContext";
import { useDispatch } from "react-redux";
import { add } from "./todosSlice";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";


export default function AddTask() {

  const { startAddingTask } = useIsAddingTask();
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();


  function handleAddTask(){
    if(!newTask) return;

    const newTaskObject = {
      id: uuidv4(),
      task: newTask,
      isCompleted: false,
      isUpdating: false,
    }

    dispatch(add(newTaskObject));
    setNewTask("");
    startAddingTask(); // close the modal
  }

  return (

    <div className="w-[50%] h-72 bg-white rounded-md p-6 flex flex-col justify-between" >

      <div className="flex flex-col items-center justify-between gap-2">

        <h2 className="font-bold text-2xl" >NEW TASK</h2>

        <form className="w-full" >

          <input 
            type="text" 
            placeholder="input your new task..." 
            className="w-full border-[2px] border-[#6C63FF] rounded-md outline-none py-1 px-3" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

        </form>

      </div>


      <div className=" flex justify-between" >

        <Button onclick={startAddingTask} type="cancel" >CANCEL</Button>
        <Button onclick={handleAddTask} >APPLY</Button>

      </div>

    </div>
  )
}
