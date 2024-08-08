import React from "react";
import Searchbar from "./../../components/mainPage/Searchbar";

import { searchDataAction } from "@/data/actions/search-action";
import Card from "@/components/mainPage/Card";
import { makeDataRequest } from "@/data/services/makeDataRequest";

async function MainPage({searchParams}) {

  const value = searchParams?.value ?? "";

  let weather = null;

  if(value!=""){
    weather = await makeDataRequest(value)
  }

  weather = {
    name:"Cloudy",
    city:"Minsk",
    dt:"10",
    main:{
      temp:"23",
      humidity:"34"
    },
    weather:[
      {
        main:"main",
        description:"description"
      }
    ],
    wind:{
      speed:"20"
    }
  }


  return (
    <React.Fragment>
      <Searchbar />
      <hr className="border border-primary border-2 opacity-60"></hr>

      <div className="list-group">

        {
          !weather ? 
          <p> nothing added...</p>
          :
          <Card weather={weather}/>

        }

       
      
      </div>
    </React.Fragment>
  );
}

export default MainPage;
