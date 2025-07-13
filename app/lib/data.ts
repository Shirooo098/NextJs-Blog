// 'use server';

// import postgres from "postgres";
// import { Blogs } from "./definitions";

// const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});


// export async function fetchAllBlogs(){
//     try {
//         const blogs = await sql<Blogs[]>
//             `SELECT id, title, category, date,
//             description, date, image as "imageUrl"
//             FROM blogs ORDER BY date desc`

//         console.log(blogs)
        
//         return {blogs}
//     } catch (error) {
//         console.error('Database error: ', error)
//         throw new Error('Failed to fetch card data.');
//     }
// }