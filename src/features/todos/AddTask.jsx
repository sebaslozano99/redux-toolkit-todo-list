import { useState } from "react";
import { useIsAddingTask } from "../../contexts/IsAddingTaskContext";
import { useDispatch } from "react-redux";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { add, setAsUpdating, update } from "./todosSlice";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import PropTypes from "prop-types";
import SearchBar from "../../components/SearchBar";




export default function AddTask({initialState}) {

  const [newTask, setNewTask] = useState(initialState?.task ?? "");
  const { startAddingTask } = useIsAddingTask();
  const { isDark } = useDarkMode();
  const dispatch = useDispatch();
  const isAddingTask = Object.keys(initialState).length === 0; //if initialState is empty, that means user is Adding, otherwise updating an exisitng task


  function handleAddorUpdateTask(e){
    e.preventDefault();
    if(!newTask) return;

    if(isAddingTask) {

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
      dispatch(update(initialState.id, newTask));
    }

    setNewTask("");
  }



  function handleCancelAddingOrUpdating(){
    if(isAddingTask) startAddingTask();
    else dispatch(setAsUpdating(initialState.id));
  }



  return (

    <div className={`flex flex-col justify-between p-6 w-[50%] h-72 ${isDark ? "bg-[#252525]" : "bg-white"} rounded-md`} >

      <div className="flex flex-col items-center justify-between gap-2">

        <h2 className={`font-bold text-2xl ${isDark ? "text-white" : ""}`} >{isAddingTask ? "NEW TASK" : "UPDATE TASK"}</h2>

        <form className="w-full" onSubmit={handleAddorUpdateTask} >

          <SearchBar initialValue={newTask} setValue={setNewTask} isDark={isDark} focus={true} />

        </form>

      </div>


      <div className=" flex justify-between" >

        <Button onclick={handleCancelAddingOrUpdating} type="secondary" >CANCEL</Button>
        <Button >APPLY</Button>

      </div>

    </div>
  )
}


AddTask.propTypes = {
  initialState: PropTypes.object,
}