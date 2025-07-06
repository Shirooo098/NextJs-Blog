import DevblogLogo from "./devblog-logo";
import { robotoMono } from "./fonts";
import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer(){
    return(
        <footer className="mt-16 rounded-2xl bg-black m-2 sm:m-10 flex flex-col items-center">
            <div className="mt-16 mb-8">
                <DevblogLogo variant="dark"/>
            </div>
            <h2 className={`${robotoMono.className} text-white text-2xl sm:text-3xl lg:text-4xl font-semibold`}>
                Get Updates
            </h2>
            <p className={`${robotoMono.className} text-white mt-4 text-center w-[80svw] sm:w-3/5 text-sm sm:text-base`}>
                Subscribe to get a fresh update from my blog.
                Join to stay up to date with latest news.   
            </p>
            <form className="flex mt-8 w-fit items-stretch bg-white p-1 sm:p-2 rounded">
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

            <div className={`${robotoMono.className} w-full mt-16 relative font-medium py-6 px-8 border-t border-t-white flex flex-col md:flex-row items-center justify-between`}>
                <p className="text-white text-center">2025 DevBlogs. All rights reserved. </p>
                <p className="text-white text-center">Made with 🤍 by DevBlogs </p>
            </div>
        </footer>
    )
}