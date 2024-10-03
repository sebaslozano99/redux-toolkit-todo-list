import Button from "../../components/Button";



export default function AddTask() {
  return (
    <div className="w-[50%] h-72 bg-white rounded-md p-6 flex flex-col justify-between" >

      <div className="flex flex-col items-center justify-between gap-2">
        <h2 className="font-bold text-2xl" >NEW TASK</h2>

        <form className="w-full" >
          <input type="text" placeholder="input your new task..." className="w-full border-[2px] border-[#6C63FF] rounded-md outline-none py-1 px-3" />
        </form>
      </div>

      <div className=" flex justify-between" >
        <Button>CANCEL</Button>
        <Button>APPLY</Button>
      </div>
    </div>
  )
}

// border-2 border-black