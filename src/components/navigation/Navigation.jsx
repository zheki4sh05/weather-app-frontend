"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
const Navigation = ({navLinks}) =>{

    const pathName = usePathname();

    const baseLinkClassName = "nav-link";

    const activeLinkClassName = "active "+baseLinkClassName;

    return (
        <>
        
        {navLinks.map((item,index)=>{
            const isActive = pathName===item.href

            return (

                <li className="nav-item" key={index}>
            <Link key = {index} className={isActive ? activeLinkClassName : baseLinkClassName } href={item.href}>

                {item.label}

            </Link>  
            </li>
            )
                     
        })}

        </>
    )
}

export default Navigation;