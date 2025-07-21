'use client'
import { CategoryType } from "@/app/lib/definitions";
import { manRope, robotoMono } from "../../ui/fonts";
import Footer from "../../ui/footer";
import { useState } from "react";
import AllBlogs from "@/app/ui/categories/all-blogs";

const categories: CategoryType[] = [
    'Web-Development', 
    'Javascript',
    'Productivity',
    'Projects'
]

export default function Categories(){
    const [category, setCategory] = useState<CategoryType | null>(null);

    return(
        <>
            <div className="h-full px-8 py-6 sm:px-6 md:px-10 lg:px-16 xl:px-24">
                <div className="flex flex-col ">
                    <h1 className={`${robotoMono.className} px-6 py-2 text-2xl font-semibold md:text-4xl lg:text-5xl `}>Categories</h1>
                    <p className={`${robotoMono.className} inline-block w-full px-6 py-2 text-sm md:text-lg lg:text-xl  border-b-2 border-b-black `}>Explore more categories and venture out my journey.</p>
                </div>
                <div className="flex flex-wrap w-full gap-2 p-6 border-b-2 border-b-black">
                    <button 
                        onClick={() => setCategory(null)}
                        className={`py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 transition-all
                            ${category === null
                                ? "bg-black text-white"
                                : "bg-white text-black" 
                            }`}
                    >
                        All
                    </button>
                    {categories.map((categ) => (
                        <button
                            key={categ}
                            onClick={() => setCategory(categ)}
                            className={`${manRope.className}  py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 transition-all 
                            ${category === categ
                                ? "bg-black text-white"
                                : "bg-white text-black" 
                            } `}
                        >
                            {categ}
                        </button>
                    ))}
                </div>
                <AllBlogs category={category}/>
            </div>
            <Footer/>
        </>
    )
}