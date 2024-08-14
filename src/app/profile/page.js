import Logout from "@/components/auth/logout";
import ProfilePage from "@/components/profilePage/Profile";
import { COOKIE_NAME, COOKIE_USER_EMAIL } from "@/components/util/apiPath";
import { getAuthData } from "@/components/util/getAuthData";
import { cookies } from "next/headers";
import Link from "next/link";

async function Profile() {
  const cookieStore = cookies();

  const loggedHeader = () => {
    return (
      <>
        <div className="d-flex  justify-content-center ">
          <div
            className="d-flex justify-content-between align-items-center flex-grow-1"
            style={{ maxWidth: "900px" }}
          >
            <div>
              <span>{cookieStore.get(COOKIE_USER_EMAIL).value}</span>
            </div>
            <div>
              <Logout />
            </div>
          </div>
        </div>
        <hr className="border border-primary border-2 opacity-60" />
      </>
    );
  };

  const header = () => {
    return (
      <>
        <div>
          <span>You must log in</span>
        </div>
        <div>
          {/* <Link  href={"/login"}>I already have an account</Link>  
    <Link  href={"/signup"}>Register</Link>   */}
        </div>
        <hr></hr>
      </>
    );
  };

  const content = () => {
    return (
      <div className="d-flex flex-column flex-grow-1">
        {loggedHeader()}
        <ProfilePage />
      </div>
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-around align-middle mt-3">
        {!cookieStore.has() ? content() : header()}
      </div>
    </div>
  );
}

export default Profile;
