"use client"

import { backPageHandler } from "@/data/actions/back-action";
import { redirect } from "next/navigation";
import { useFormState } from 'react-dom';

function BackButton({backToPageName}) {


    const INITIAL_STATE = {
        to:"",
      }
    
     const [formState, formAction] = useFormState(backPageHandler, INITIAL_STATE);  

    return ( 
            <form action={formAction}>
                 <input style={{display:"none"}} id="id" name="page" defaultValue = {backToPageName} />
                <button type="submit" className="btn btn-link" >Back</button> 
            </form>

   
);
}

export default BackButton;