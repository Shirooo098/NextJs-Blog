import { robotoMono } from "./fonts";

interface DevBlogLogoProps{
    variant?: "light" | "dark";
}

export default function DevblogLogo({variant = "light"}: DevBlogLogoProps) {
    const textColor = variant === "dark" ? "text-white" : "text-black";
    const symbolColor = variant === "dark" ? "text-blue-500" : "text-blue-900";
    
    return (
        <div className={`${robotoMono.className} font-bold flex flex-row items-center leading-none ${textColor}`}>
            <p className="text-2xl">
                <span className={`${symbolColor} mr-5`}>&lt;/&gt;</span>
                DevBlog
            </p>
        </div>
    );
}
