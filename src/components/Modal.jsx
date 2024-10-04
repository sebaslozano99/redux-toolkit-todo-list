import AddTask from "../features/todos/AddTask";
import PropTypes from "prop-types";



export default function Modal({initialState = {}}) {

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center`} >
      <AddTask initialState={initialState} />
    </div>
  )
}



Modal.propTypes = {
  initialState: PropTypes.object,
}
