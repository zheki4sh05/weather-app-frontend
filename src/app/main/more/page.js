
import MorePage from './../../../components/morePage/MorePage';
async function MoreWeatherInfo({searchParams}) {
    const params = new URLSearchParams(searchParams);
    let cityName = params.get("value")
    return ( 
    <div className='d-flex flex-column'>
        <div className='d-flex flex-column my-3' >
            
            <h4>7 days weather for <strong>{cityName}</strong></h4>
            <hr className="border border-primary border-2 opacity-60" />
        </div>
        
         <MorePage value={cityName} currentPage="/main"/>
    </div>
   
);
}

export default MoreWeatherInfo;