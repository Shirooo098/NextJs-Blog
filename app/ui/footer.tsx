import DevblogLogo from "./devblog-logo";

export default function Footer(){
    return(
        <footer className="mt-16 rounded-2xl bg-black m-2 sm:m-10 flex flex-col items-center">
            <div><DevblogLogo variant="dark"/></div>
        </footer>
    )
}