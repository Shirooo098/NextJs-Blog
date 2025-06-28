import DevblogLogo from "./devblog-logo";
import NavLinks from "./nav-links";

export default function Nav(){
    return(
       <div className="flex justify-between py-6 px-30 size-auto">
        <div className="flex justify-center h-12">
            <DevblogLogo/>
        </div>
        <div className="flex w-80">
            <NavLinks/>
        </div>
       </div>
    )
}