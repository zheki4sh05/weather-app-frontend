import { fetchProfileData } from "@/data/actions/action-fetch";
import Card from "../mainPage/Card";

async function ProfilePage() {

    const data = await fetchProfileData()
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