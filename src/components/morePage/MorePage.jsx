import { fetchMoreWeatherData } from "@/data/actions/search-action";
import BackButton from "../navigation/BackButton";

async function MorePage({value,currentPage}) {

    const data = await fetchMoreWeatherData(value)

    return (
    <div className="d-flex flex-column" >

        <div className="d-flex">
            <BackButton backToPageName={currentPage} />
        </div>
       

    </div> 
    
);
}

export default MorePage;