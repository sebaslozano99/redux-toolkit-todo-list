import AddTask from "../features/todos/AddTask";


export default function Modal() {
  return (
    <div className={`fixed inset-0 bg-black/60 flex justify-center items-center`} >
        <AddTask />
    </div>
  )
}
