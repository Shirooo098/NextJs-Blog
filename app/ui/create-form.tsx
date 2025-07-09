'use client'

import { createBlog } from "@/app/lib/action";
import { State } from "@/app/lib/definitions";
import { useActionState } from "react";


export default function Form(){
    const initialState: State= {message: null, errors: {}};
    const [state, formAction] = useActionState(createBlog, initialState);

    return(
        <>
        <h1>Dashboard</h1>
            <form action={formAction}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text"
                    name="title"
                    arie-describedby="title-error" />
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
                <input 
                    type="text"
                    name="category"
                    arie-describedby="category-error" />
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
                    type="text"
                    name="description"
                    arie-describedby="description-error" />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.description && 
                    state.errors.description.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                        </p>
                    ))
                    }
                </div>
                <label htmlFor="file">File</label>
                <input 
                    type="file"
                    name="image"
                    arie-describedby="image-error" />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.image && 
                    state.errors.image.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                        </p>
                    ))
                    }
                </div>
                <button type="submit">Create Blog</button>
            </form>
        </>
    )
}