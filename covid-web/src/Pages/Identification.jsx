import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import ProcessStepper from "../Components/ProcessStepper";


function Identification(props) {
  const [idType, setIdType] = useState('')
  const [error, setError] = useState(false)

  let navigate = useNavigate();
  console.log(props.idNumber)
  console.log(error)

  const handleSumit = ()=>{
    if(props.idNumber == undefined || props.idNumber ==null || props.idNumber == '')
    {
      setError(true)
    }
    else{
      setError(false)
      navigate('/centre')
    }
  }
    
  return (
    <div>
      <div className="bg-blue-200 h-36">
        <h1
          className="items-center font-medium text-2xl text-gray-700 p-10"
          style={{ textAlign: "center" }}
        >
          Registration
        </h1>
        <div className="flex justify-center">
          <div className="w-68 border p-14 bg-white rounded-3xl">
        <ProcessStepper stepCount={0}/>
        </div>
        </div>
        
      </div>
      <div>
        <h1
          className="items-center font-medium text-2xl text-gray-500 p-10 pt-36"
          style={{ textAlign: "center" }}
        >
          Select identification type
        </h1>
      </div>

      <div className="flex justify-center">
        <div id="main" className="grid grid-cols-2 gap-20">
          <button className="focus:border-sky-400 focus:text-sky-400 bg-white w-60 h-24 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
          onClick={()=>{setIdType('Adhar ID')}}>
            Adhar ID
          </button>
          <button className="focus:border-sky-400 focus:text-sky-400 bg-white w-60 h-24 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
          onClick={()=>setIdType('Student ID')}>
            Student ID
          </button>
          <button className="focus:border-sky-400 focus:text-sky-400 bg-white w-60 h-24 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
          onClick={()=>setIdType('Passport No.')}>
            Passport
          </button>
          <button className="focus:border-sky-400 focus:text-sky-400 bg-white w-60 h-24 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
          onClick={()=>setIdType('Birth Certificate No.')}>
            Birth Certificate
          </button>
        </div>
      </div>
      {idType!=''?(<div className="flex justify-center">
        <div className="pt-14">
          <label className="block">
            <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Enter your {idType}
            </span>
            <input
              onChange={(e)=>props.setIdNumber(e.target.value)}
              type="text"
              maxLength={10}
              name="id"
              className="w-96 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder=""
            />
            {error?(<div className="error text-red-500">Please enter the Id number</div>):(null)}
          </label>
          <button className="bg-sky-600 p-2 w-96 rounded-md mt-5 text-white mb-20" onClick={handleSumit}>Next</button>
        </div>
      </div>):(null)}
    </div>
  );
}
export default Identification;
