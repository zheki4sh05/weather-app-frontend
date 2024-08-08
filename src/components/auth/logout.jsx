import { logoutAction } from "@/data/actions/auth-actions";

function Logout() {
  
    return ( 
        <form action={logoutAction}>
        <button type="submit" className="btn btn-outline-danger">
            Log out
        </button>
      </form>
     );
}

export default Logout;