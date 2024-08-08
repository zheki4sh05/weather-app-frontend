import Link from "next/link";
import Navigation from "./Navigation";
import { getAuthData } from "../util/getAuthData";

async function Navbar() {

  const authData = await getAuthData();


    const navLinks = [
      {
        label:"Main",
        href:"/main"
      },
      {
        label:"My profile",
        href:"/profile"
      },
      {
        label:"Login",
        href:"/login"
      },
      {
        label:"Sign up",
        href:"/signup"
      },
    ]

    const loggedNavLinks =[
      {
        label:"Main",
        href:"/main"
      },
      {
        label:"My profile",
        href:"/profile"
      },
          ]

    return (

        <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Daily meteo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Navigation navLinks={authData ? loggedNavLinks : navLinks} />
      </ul>
    </div>
  </div>
</nav>

     );
}

export default Navbar;