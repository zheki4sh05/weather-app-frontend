import { fetchProfileData } from "@/data/actions/action-fetch";
import Card from "../mainPage/Card";

async function ProfilePage() {

    const data = await fetchProfileData()
    console.log("-----------")
    console.log(data)

    // let weather = {
    //     id:1,
    //     name:"Cloudy",
    //     city:"Minsk",
    //     dt:"10",
    //     lat:"23",
    //     lon:"34",
    //     main:{
    //       temp:"23",
    //       humidity:"34"
    //     },
    //     weather:[
    //       {
    //         main:"main",
    //         description:"description"
    //       }
    //     ],
    //     wind:{
    //       speed:"20"
    //     }
    //   }

    //   const data = [
    //     weather
    //   ]
    

    return ( 
    <div className="d-flex flex-column" >

        {
            data.map((item,index)=>(
                <div className="mb-2" key={index}>
                     <Card key={index} weather={item} hasDeleteButton={true}/>
                </div>
               
            ))
        }

    </div> 
    );
}

export default ProfilePage;