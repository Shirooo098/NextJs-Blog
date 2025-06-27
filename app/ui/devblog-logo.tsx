import { robotoMono } from "./fonts";

export default function DevblogLogo() {
    return (
        <div className={`${robotoMono.className} font-bold flex flex-row items-center leading-none text-black`}>
            <p>
                <span className="text-blue-900 mr-1">&lt;/&gt;</span>
                DevBlog
            </p>
        </div>
    );
}
