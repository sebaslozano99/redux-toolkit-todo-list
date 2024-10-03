import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";



const IsAddingTaskContext = createContext();

 
function IsAddingTaskProvider({children}) {

  const [isAddingTask, setIsAddingTask] = useState(false);

  function startAddingTask(){
    setIsAddingTask((isAddingTask) => !isAddingTask);
  }

  return (
    <IsAddingTaskContext.Provider value={{
        isAddingTask,
        startAddingTask,
    }}>
        {children}
    </IsAddingTaskContext.Provider>
  )
}


export { IsAddingTaskProvider, useIsAddingTask }


function useIsAddingTask(){
    const context = useContext(IsAddingTaskContext);
    if(context === undefined) throw new Error("useIsAddingTask is being used outside of IsAddingTaskProvider!");
    return context;
}


IsAddingTaskProvider.propTypes = {
    children: PropTypes.node
}