"use client"
import { deleteWeatherDataByid } from '@/data/actions/action-del-weather-data';
import { useFormState } from 'react-dom';
function DeleteButton({ id }) {

  console.log(id)
    const INITIAL_STATE = {
        id:"",
      }
    
      const [formState, formAction] = useFormState(deleteWeatherDataByid, INITIAL_STATE);  

  return (
    <form action={formAction} >
         <input style={{display:"none"}} id="id" name="id" defaultValue = {id} />
      <button type="submit" className="btn btn-outline-danger mx-2">
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
