'use server';

import postgres from "postgres";
import { z } from "zod";
import { State, EmailState } from "./definitions";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const FormSchema = z.object({
    id: z.string(),
    title: z.string({
        error: 'Please input a title.',
    }),
    category: z.enum(['Web-Development', 'Javascript', 'Productivity', 'Projects'], {
        error: 'Please select a category.'
    }),
    description: z.string({
        error: 'Please include a description.'
    }),
    image: z.instanceof(File, {
        error: "Please select an image."
    }).refine(file => file.size > 0, "File cannot be empty")

});

const CreateBlog = FormSchema.omit({ id: true});

export async function createBlog(prevState: State, formData: FormData){
    const imageFile = formData.get('image') as File;


    const validateFields = CreateBlog.safeParse({
        title: formData.get('title'),
        category: formData.get('category'),
        description: formData.get('description'),
        image: imageFile
    })

    if(!validateFields.success){
       const { fieldErrors, formErrors } = z.flattenError(validateFields.error);

        return{
            errors: fieldErrors,
            message: formErrors.length > 0 ? formErrors[0] : 
                'Missing Fields. Failed to Create Blog.'
        }
    }

    const {title, category, description, image} = validateFields.data

    try {
        
        const {data: uploadData, error: uploadError} = await uploadImage(image)

        if(uploadError){
            console.error('Image Upload Failed', uploadError);
            return { message : "Failed to upload image." };
        }

        const imageUrl = await getMedia(uploadData!.path);

        console.log(validateFields.data, imageUrl);

        await sql`
            INSERT INTO blogs(title, category, description, image)
            VALUES(${title}, ${category}, ${description}, ${imageUrl})
        `
        
        return{
            message: 'Blog Created Successfully'
        }
    } catch (error) {
        console.error(error)
        return {
            message: 'Database Error: Failed to create Blog.'
        };
    }
}

async function uploadImage(file: File): Promise<{
    data: { path: string } | null,
    error: Error | null }>{
   
    try {
        const fileName = `blog-images/${uuidv4()}-${file.name}`;
        const { error } = await supabase
            .storage
            .from('upload')
            .upload(fileName, file);

        if (error) {
            return { data: null, error: new Error(error.message) };
        }

        return { data: { path: fileName }, error: null };
    } catch (error) {
        return { data: null, error: error instanceof Error ? error : new Error('Unknown upload error') };
    }
}

async function getMedia(filePath: string): Promise<string>{
    const { data: { publicUrl } } = await supabase
        .storage
        .from('upload')
        .getPublicUrl(filePath)

    return publicUrl;
}


const ContactFormSchema = z.object({
    name: z.string({ message: 'Name is required.'}),
    email: z.string().email({
        message: 'Please enter a valid email.'
    }),
    subject: z.string({ message: 'Subject is required.'}),
    message: z.string({ message: 'Message is required.'}),
    date: z.string()
})

const CreateEmail = ContactFormSchema.omit({ date: true })

export async function submitEmail(prevState: EmailState, formData: FormData):
Promise<EmailState>{
    const validateFields = CreateEmail.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    });

    if(!validateFields.success){
        const { fieldErrors, formErrors } = validateFields.error.flatten();

        return {
            errors: fieldErrors,
            errorMessage: formErrors.length > 0 ? formErrors[0] : 
                'Missing Fields. Failed to send email'
        }
    }

    const {name, email, message} = validateFields.data;
    const date = new Date().toISOString().split('T')[0];

    try {

        const payload = { name, email, message, date }
        console.log(payload);

        // const res = await axios.post('http://localhost:3000/api/email', payload, {
        //     headers: { 'Content-Type': 'application/json'}
        // })

        const res = await axios.post(`${process.env.NEXT_PUBLIC_PROD_URL}`, payload, {
            headers: { 'Content-Type': 'application/json'}
        })

        return res.data;
    } catch (error) {
        console.error(error);
        return{
            errorMessage: 'Something went wrong: Failed to Submit Email.'
        }
    }
}