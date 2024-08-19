"use client"

import { addWeatherData } from "@/data/actions/action-add-data";
import Link from "next/link";
import { useFormState } from 'react-dom';

function SaveInfoBtn({weather,data}) {

  const INITIAL_STATE = {
    city:"",
    lot:"",
    lan:""
  }

  function isSameCoordinates(obj){
    return obj.coord.lon == weather.lon && obj.coord.lat == weather.lat
  }

  function checkIfAdded(data){


    if(data.some(isSameCoordinates)){
      return (
  

        <Link href="/profile" ><button type="button" className="btn btn-success mx-2">View</button></Link>

      )
    }else{
      return (
        <button type="submit" className="btn btn-outline-primary mx-2">
        Add
      </button>
      )
    }
     
  }



  const [formState, formAction] = useFormState(addWeatherData, INITIAL_STATE);

  return (
    <form action = {formAction}>

      <input style={{display:"none"}} id="city" name="city" defaultValue = {weather.city} />
      <input style={{display:"none"}} id="lon" name="lon" defaultValue = {weather.lon} />
      <input style={{display:"none"}} id="lat" name="lat" defaultValue = {weather.lat} />

      {checkIfAdded(data)}
    </form>
  );
}

export default SaveInfoBtn;
