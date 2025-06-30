import DevblogLogo from "./devblog-logo";
import NavLinks from "./nav-links";

export default function Nav(){
    return(
       <div className="flex justify-between py-6 px-4 sm:px-6 md:px10 lg:px-16 xl:px-24 size-auto">
        <div className="flex justify-center h-12">
            <DevblogLogo variant="light"/>
        </div>
        <div className="flex w-80">
            <NavLinks/>
        </div>
       </div>
    )
}