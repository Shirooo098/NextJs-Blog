import DevblogLogo from "./devblog-logo";
import NavLinks from "./nav-links";

export default function Nav(){
    return(
       <div className="flex justify-between py-6 px-24">
        <div className="flex justify-center">
            <DevblogLogo/>
        </div>
        <div className="flex">
            <NavLinks/>
        </div>
       </div>
    )
}