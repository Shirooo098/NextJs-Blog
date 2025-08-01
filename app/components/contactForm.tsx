'use client';

import { useActionState } from "react";
import { submitEmail } from "../lib/action";
import { EmailState } from "../lib/definitions";

export default function ContactForm(){
    const initialState: EmailState = { errorMessage: null, errors: {}}
    const sendEmail = submitEmail.bind(null);
    const [state, formAction] = useActionState(sendEmail, initialState);

    console.log(state)

    return(
        <form action={formAction}>
            <input type="hidden"
                name="subject"
                value="" />
            <input 
                type="text"
                name="name"
                placeholder="name"
                aria-describedby="name-error"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
                {state.errors?.name && 
                state.errors.name.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                    </p>
                ))
                }
            </div>
            <input 
                type="email"
                name="email"
                placeholder="email"
            />
            <textarea 
                name="message" 
                placeholder="Message"
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}