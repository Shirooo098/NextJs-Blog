'use server';

import postgres from "postgres";
import { z } from "zod";
import { State } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

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
    image: z.string({
        error: "Please select an image."
    })

});

const CreateBlog = FormSchema.omit({ id: true});

export async function createBlog(prevState: State, formData: FormData){
    const imageFile = formData.get('image') as File;


    const validateFields = CreateBlog.safeParse({
        title: formData.get('title'),
        category: formData.get('category'),
        description: formData.get('description'),
        image: imageFile?.name ?? ''
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
        console.log(validateFields.data)
        await sql`
            INSERT INTO blogs(title, category, description, image)
            VALUES(${title}, ${category}, ${description}, ${image})
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