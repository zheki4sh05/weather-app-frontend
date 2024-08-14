"use client"

import { addWeatherData } from "@/data/actions/action-add-data";
import Link from "next/link";
import { useFormState } from 'react-dom';

function SaveInfoBtn({weather}) {

  const INITIAL_STATE = {
    city:"",
    lot:"",
    lan:""
  }

  const [formState, formAction] = useFormState(addWeatherData, INITIAL_STATE);

  return (
    <form action = {formAction}>

      <input style={{display:"none"}} id="city" name="city" defaultValue = {weather.city} />
      <input style={{display:"none"}} id="lon" name="lon" defaultValue = {weather.lon} />
      <input style={{display:"none"}} id="lat" name="lat" defaultValue = {weather.lat} />

      <button type="submit" className="btn btn-outline-primary mx-2">
        Add
      </button>
    </form>
  );
}

export default SaveInfoBtn;
