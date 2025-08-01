'use client';

import { useActionState } from "react";
import { submitEmail } from "../lib/action";
import { EmailState } from "../lib/definitions";

export default function ContactForm() {
    const initialState: EmailState = { errorMessage: null, errors: {} }
    const sendEmail = submitEmail.bind(null);
    const [state, formAction] = useActionState(sendEmail, initialState);

    return (
        <form 
            action={formAction}
            className="mt-20 text-start px-10 sm:px-20 md:px-30 text-lg xs:text-xl sm:text-2xl font-normal leading-relaxed"
        >
            <input type="hidden"
                name="subject"
                value="" />
            Hello! my name 
            <input 
                type="text"
                name="name"
                placeholder="your name"
                aria-describedby="name-error"
                className="input-style"
            />
            and I want to discuss a potential project.
            <div id="name-error" aria-live="polite" aria-atomic="true">
                {state.errors?.name && 
                state.errors.name.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                ))}
            </div>
            
            You can email me at
            <input 
                type="email"
                name="email"
                placeholder="your @ email"
                aria-describedby="email-error"
                className="input-style"
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
                {state.errors?.email && 
                state.errors.email.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                ))}
            </div>
            
            Here are some details about my project:
            <textarea 
                name="message" 
                placeholder="My project is about..."
                aria-describedby="message-error"
                className="w-full sm:w-3/5 md:w-4/5 input-style"
            ></textarea>
            <div id="message-error" aria-live="polite" aria-atomic="true">
                {state.errors?.message && 
                state.errors.message.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                ))}
            </div>
            
            <button 
                type="submit"
                className="mt-8 font-medium inline-block capitalize 
                text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 text-blue-900
                border-2 border-solid border-blue-900 rounded cursor-pointer"
            >
                Send Request
            </button>
            
            {state.errorMessage && (
                <p className="mt-2 text-sm text-red-500">
                    {state.errorMessage}
                </p>
            )}
        </form>
    )
}