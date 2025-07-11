'use client'

import { createBlog } from "@/app/lib/action";
import { categoryTypes, State } from "@/app/lib/definitions";
import { useActionState } from "react";
import { manRope } from "../fonts";
import { useState } from "react";

export default function Form(){
    const initialState: State= {message: null, errors: {}};
    const [state, formAction] = useActionState(createBlog, initialState);
    const [selectedImage, setSelectedImage] = useState("No Image Chosen")

    return(
        <form action={formAction} className={`${manRope.className}`}>
            <div className="flex flex-col p-4 bg-gray-50 rounded-md md:p-6">
                <label htmlFor="title">Title</label>
                <input 
                    id="title"
                    type="text"
                    name="title"
                    aria-describedby="title-error"
                    className="input" />
                <label htmlFor="category">Category</label>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.title && 
                    state.errors.title.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                        </p>
                    ))
                    }
                </div>

                <select 
                    name="category"
                    id="category"
                    aria-describedby="category-error"
                    className="input">
                    <option value="" disabled>Category</option>
                   {categoryTypes.map((cat) => (
                        <option
                            key={cat} 
                            value={cat}>
                                {cat}
                         </option>
                   ))}

                </select>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.category && 
                    state.errors.category.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                        </p>
                    ))
                    }
                </div>

                <label htmlFor="description">Description</label>
                <input
                    id="description" 
                    type="text"
                    name="description"
                    aria-describedby="description-error"
                    className="input" />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.description && 
                    state.errors.description.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                        </p>
                    ))
                    }
                </div>
                
                <div className="flex mt-4">              
                    <input
                    id="image" 
                    type="file"
                    onChange={(e) => {
                        if(e.target.files && e.target.files.length > 0){
                            setSelectedImage(e.target.files[0].name)
                        }else {
                            setSelectedImage("No Image Chosen")
                        }
                    }}
                    name="image"
                    accept="image/*"
                    aria-describedby="image-error"
                    className="hidden" />
                    <label htmlFor="image"
                        className="block mr-4 py-2 px-4 bg-blue-500
                        text-sm font-semibold text-white
                        rounded-md border-0 hover:bg-blue-700 cursor-pointer"
                    >
                        Choose Image
                    </label>
                    <label className="flex text-slate-500 text-sm items-center">{selectedImage}</label>
                </div>
                <div id="image-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.image && 
                    state.errors.image.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                        </p>
                    ))
                    }
                </div>  
            </div>
            <div className="flex justify-end">
                <button>Cancel</button>
                <button type="submit">Create Blog</button>
            </div>
        </form>
    )
}