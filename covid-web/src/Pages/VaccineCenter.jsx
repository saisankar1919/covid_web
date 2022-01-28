import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import ProcessStepper from '../Components/ProcessStepper';

function VaccineCenter(props) {
  
  const [states, setStates] = useState();
  const [districts, setDistricts] = useState();
  const [today, setToday] = useState();
  const [centers, setCenters] = useState();
  const [pincode, setPincode] = useState();

  

  useEffect(() => {
    axios
      .get("https://cdndemo-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => {
        setStates(res.data.states);
      });
  }, []);

  const createToday = ()=>{
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    console.log(date)
    setToday(date)
  }

  const handleDistrict = (stateid)=>{
    console.log('stateid');
    console.log(stateid);
    axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`).then((res)=>{
        setDistricts(res.data.districts)
    })
  }

  const handleCenterByDistrict = (districtid)=>{
    console.log(districtid)
    createToday();
    axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtid}&date=${today}`).then((res)=>{
      console.log(res);
      setCenters(undefined)
      setCenters(res.data.centers)
    })
  }

  const pincodeHandler = ()=>{
    console.log(pincode)
    axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${today}`).then((res)=>{
    console.log(res) 
    setCenters(undefined) 
    setCenters(res.data.centers)
    })
  }

  const click = ()=>{
    console.log('clicked')
  }

  return (
    <div>
      <div className="bg-blue-200 h-36">
        <h1
          className="items-center font-medium text-2xl text-gray-700 p-10"
          style={{ textAlign: "center" }}
        >
          Registration processing
        </h1>
        <div className="flex justify-center">
          <div className="w-68 border p-14 bg-white rounded-3xl">
        <ProcessStepper stepCount={1}/>
        </div>
        </div>
      </div>
      <div>
        <h1
          className="items-center font-medium text-2xl text-gray-500 p-10 pt-36"
          style={{ textAlign: "center" }}
        >
          Choose Vaccine center
        </h1>
      </div>
      <div className="flex justify-center">
        <div id="main" className="grid grid-cols-3 gap-20">
          <label className="block">
            <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              State
            </span>

            <select
              name="cars"
              id="cars"
              className="w-48 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={(e)=>handleDistrict(e.target.value)}>
              
              {states?.map((anObjectMapped, index) => {
                return (
                  <option key={index} value={anObjectMapped.state_id}>
                    {anObjectMapped.state_name}</option>
                );
              })}
            </select>
          </label>
          <label className="block">
            <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              District
            </span>

            <select
              name="cars"
              id="cars"
              className="w-48 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={(e)=>handleCenterByDistrict(e.target.value)}>
              {districts?.map((anObjectMapped, index) => {
                return (
                  <option key={index} value={anObjectMapped.district_id}>
                    {anObjectMapped.district_name}</option>
                );
              })}
            </select>
          </label>
          <label className="block">
            <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Pincode
            </span>
            <input
              onChange={(e)=>setPincode(e.target.value)}
              type="number"
              maxLength={6}
              name="id"
              className="w-48 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder=""
              onBlur={pincodeHandler}
            />
          </label>
        </div>
      </div>
        <div className="flex justify-center mt-14">
        <div id="main" className="grid grid-cols-5 gap-10 ">
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
      <div className="flex flex-col mt-20">
      <div className="-my-2 overflow-x-auto sm:-mx-8 lg:-mx-6">
        <div className="py-2 align-middle inline-block min-w-half flex justify-center sm:px-8 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-half divide-y divide-gray-200">
              <thead className="bg-gray-300 rounded-2xl">
                <tr>
                  <th
                    scope="col"
                    className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Vaccine
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Available Quantity
                  </th>
                  
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-500 mt-20 rounded">
              {centers?.map((object, index) => {
                return (
                  <tr key={object.center_id}>
                    <td className="">
                      <div className="flex items-center">
                      <p className="ml-5 text-sm text-gray-900">{index+1}</p>

                      </div>
                    </td>
                      <p className="text-left  text-sm text-gray-900">{object.name}</p>
                      <p className="text-left text-sm text-gray-500" style={{inlinSize:'50px', overflowWrap:'break-word'}}>{object.address}</p>
                    
                   
                      <td className="text-sm text-gray-500">{object.sessions[0].vaccine}</td>
                    {object.sessions[0].available_capacity>=10?(<td className="px-6 py-4 text-sm text-gray-500 text-green-500">{object.sessions[0].available_capacity}</td>):
                    (<td className="px-6 py-4 text-sm text-gray-500 text-red-500">{object.sessions[0].available_capacity}</td>)}
                    <td className="text-sm text-gray-500">{object.action}</td>

                  </tr>
                );
              })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default VaccineCenter;
