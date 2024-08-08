import Logout from "@/components/auth/logout";
import { getAuthData } from "@/components/util/getAuthData";
import { cookies } from "next/headers";
import Link from "next/link";


function Profile() {

    const cookieStore = cookies()



    const loggedHeader = () =>{
        return (
            <>
            <div>
            <span>
                user email
            </span>
        
        </div>
        <div>
           <Logout/>
        
        </div>
            </>
            

        )
    }

    const header = () =>{
        return(
<>
        <div>
        <span>
             You must log in
        </span>
    
    </div>
    <div>
    {/* <Link  href={"/login"}>I already have an account</Link>  
    <Link  href={"/signup"}>Register</Link>   */}

    
    </div>
        </>
        )
        
    }

    return ( 
    <div>
        <div className="d-flex justify-content-around align-middle mt-3">

       
            {
                cookieStore.has() ? 
                loggedHeader()
                :
                header()

            }

            
           
        </div>
        <hr></hr>
    </div> );
}

export default Profile;