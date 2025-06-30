import DevblogLogo from "./devblog-logo";
import { robotoMono } from "./fonts";
import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer(){
    return(
        <footer className="mt-16 rounded-2xl bg-black m-2 sm:m-10 flex flex-col items-center">
            <div className="mt-16 mb-8">
                <DevblogLogo variant="dark"/>
            </div>
            <h2 className={`${robotoMono.className} text-white text-3xl font-semibold`}>
                Get Updates
            </h2>
            <p className={`${robotoMono.className} text-white mt-4`}>
                Subscribe to get a fresh update from my blog. 
            </p>
            <p className={`${robotoMono.className} text-white`}>
                Join to stay up to date with latest news.  
            </p>
            <form className="flex mt-8 bg-white py-1 px-2 rounded">
                <input
                 type="email"
                 placeholder="Enter your email"
                 className={`${robotoMono.className}  border-b focus: outline-0`} />
                <button className="ml-2 px-4 py-2 bg-black rounded text-white">
                    Submit
                </button>
            </form>

            <div className="flex items-center mt-8">
                <Linkedin className="mr-4" color="white" size={30}/>
                <Github className="mr-4" color="white" size={30} />
                <Instagram className="mr-4" color="white" size={30}/>
            </div>

            <div className={`${robotoMono.className} flex justify-between w-full mt-16 relative font-medium py-6 px-8 border-t border-t-white`}>
                <p className="text-white text-center">2025 DevBlogs. All rights reserved. </p>
                <p className="text-white text-center">Made with 🤍 by DevBlogs </p>
            </div>
        </footer>
    )
}