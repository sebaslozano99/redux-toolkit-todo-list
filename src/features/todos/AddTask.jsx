import { useEffect, useRef, useState } from "react";
import { useIsAddingTask } from "../../contexts/isAddingTaskContext";
import { useDispatch } from "react-redux";
import { add, setAsUpdating, update } from "./todosSlice";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import PropTypes from "prop-types";




export default function AddTask({initialState}) {

  const [newTask, setNewTask] = useState(initialState?.task ?? "");
  const { startAddingTask } = useIsAddingTask();
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const isAddingTaskOrUpdating = Object.keys(initialState).length === 0; //if initialState is empty, that means user is Adding, otherwise updating an exisitng task


  function handleAddTask(e){
    e.preventDefault();
    if(!newTask) return;

    if(isAddingTaskOrUpdating) {

      console.log("working");

      const newTaskObject = {
        id: uuidv4(),
        task: newTask,
        isCompleted: false,
        isUpdating: false,
      }
  
      dispatch(add(newTaskObject));
      startAddingTask(); // close the modal

    }
    else{
      console.log("hi");
      dispatch(update(initialState.id, newTask));
    }

    setNewTask("");
  }



  function handleCancelAddingOrUpdating(){
    if(isAddingTaskOrUpdating) startAddingTask();
    else dispatch(setAsUpdating(initialState.id));
  }


  useEffect(() => {
    inputEl.current.focus();
  }, [])


  return (

    <div className="w-[50%] h-72 bg-white rounded-md p-6 flex flex-col justify-between" >

      <div className="flex flex-col items-center justify-between gap-2">

        <h2 className="font-bold text-2xl" >{isAddingTaskOrUpdating ? "NEW TASK" : "UPDATE TASK"}</h2>

        <form className="w-full" onSubmit={handleAddTask} >

          <input 
            type="text" 
            placeholder="input your new task..." 
            className="w-full border-[2px] border-[#6C63FF] rounded-md outline-none py-1 px-3" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            ref={inputEl}
          />

        </form>

      </div>


      <div className=" flex justify-between" >

        <Button onclick={handleCancelAddingOrUpdating} type="cancel" >CANCEL</Button>
        <Button >APPLY</Button>

      </div>

    </div>
  )
}


AddTask.propTypes = {
  initialState: PropTypes.object,
}