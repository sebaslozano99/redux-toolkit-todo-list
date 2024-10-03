import AddTask from "../features/todos/AddTask";


export default function Modal() {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center`} >
      <AddTask />
    </div>
  )
}
