import { IsAddingTaskProvider } from "./contexts/IsAddingTaskContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";

import Header from "./components/Header";
import Form from "./components/Form";
import TasksContainer from "./features/todos/TasksContainer";
import Homepage from "./pages/Homepage";


export default function App() {

  return (
    <IsAddingTaskProvider>
      <DarkModeProvider>
        <Homepage>
          <Header />
          <Form />
          <TasksContainer />
        </Homepage>
      </DarkModeProvider>
    </IsAddingTaskProvider>
  )
}
