import { useEffect, useState } from "react";
import axios from "axios";

function VaccineCenter() {
  const [states, setStates] = useState();
  const [districts, setDistricts] = useState();

  console.log(states);

  useEffect(() => {
    axios
      .get("https://cdndemo-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => {
        setStates(res.data.states);
      });
  }, []);

  const handleDistrict = (stateid)=>{
    console.log('stateid');
    console.log(stateid);
    axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`).then((res)=>{
        console.log(res)
    })
  }

  return (
    <div>
      <div className="bg-blue-200 ">
        <h1
          className="items-center font-medium text-2xl text-gray-700 p-10"
          style={{ textAlign: "center" }}
        >
          Registration processing
        </h1>
      </div>
      <div>
        <h1
          className="items-center font-medium text-2xl text-gray-500 p-10"
          style={{ textAlign: "center" }}
        >
          Choose Vaccine center
        </h1>
      </div>
      <div className="flex justify-center">
        <div id="main" class="grid grid-cols-3 gap-20">
          <label class="block">
            <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              State
            </span>

            <select
              name="cars"
              id="cars"
              className="w-48 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={(e)=>handleDistrict(e.target.value)}>
              <option disabled>Choose</option>
              {/* {states?.map((i) => {
                <option>{i}</option>;
              })} */}
              {states?.map((anObjectMapped, index) => {
                return (
                  <option key={index} value={anObjectMapped.state_id}>
                    {anObjectMapped.state_name}</option>
                );
              })}
            </select>
          </label>
          <label class="block">
            <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              District
            </span>

            <select
              name="cars"
              id="cars"
              className="w-48 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            >
              <option selected disabled>Choose....</option>
              <option>Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </label>
          <label class="block">
            <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Pincode
            </span>
            <input
              type="number"
              maxLength={6}
              name="id"
              className="w-48 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder=""
            />
          </label>
        </div>
      </div>
        <div className="flex justify-center mt-14">
        <div id="main" class="grid grid-cols-5 gap-10 ">
          <button className="focus:border-sky-400 focus:text-sky-400 bg-white w-32 h-20 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
          id="age" name="age">
            18+
          </button>
          <button className="focus:border-sky-400 focus:text-sky-400 bg-white w-32 h-20 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
          id="age" name="age">
            45+
          </button>
          <button className="focus:border-sky-400 focus:text-sky-400 bg-white w-32 h-20 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
          id="method" name="method">
            Free
          </button>
          <button className="focus:border-sky-400 focus:text-sky-400 bg-white w-32 h-20 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
         id="method" name="method">
            Paid
          </button>
          <button className="focus:border-sky-400 focus:text-sky-400 bg-white w-32 h-20 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
         >
            First dose
          </button>
        </div>
      </div>
    </div>
  );
}
export default VaccineCenter;
