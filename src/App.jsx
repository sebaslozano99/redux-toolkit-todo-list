import Header from "./components/Header";
import Form from "./components/Form";
import TasksContainer from "./features/todos/TasksContainer";
import { IsAddingTaskProvider } from "./contexts/isAddingTaskContext";
import Homepage from "./pages/Homepage";


// border-8 border-red-700 border-dashed

export default function App() {





  return (
    <IsAddingTaskProvider>
      <Homepage>
        <Header />
        <Form />
        <TasksContainer />
      </Homepage>
    </IsAddingTaskProvider>
  )
}
