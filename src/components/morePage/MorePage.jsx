import { fetchMoreWeatherData } from "@/data/actions/search-action";
import BackButton from "../navigation/BackButton";
import MoreCard from "../mainPage/MoreCard";

async function MorePage({value,currentPage}) {

    //const data = await fetchMoreWeatherData(value)

    const data = [1,2,3,4,5];

    return (
    <div className="d-flex flex-column" >

        <div className="d-flex">
            <BackButton backToPageName={currentPage} />
        </div>

        {
            data.map((item,index)=>(
                <MoreCard/>
            ))
        }


          
        
       

    </div> 
    
);
}

export default MorePage;