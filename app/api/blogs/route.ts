import postgres from "postgres";
import { Blogs } from "@/app/lib/definitions";
import { NextResponse } from "next/server";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

export async function GET(){
    try {
        const blogs = await sql<Blogs[]>
            `SELECT id, title, category, date,
            description, date, image as "imageUrl"
            FROM blogs ORDER BY date desc 
            LIMIT 6`

        console.log(blogs)
        
        return NextResponse.json({blogs})
    } catch (error) {
        console.error('Database error: ', error)
        throw new Error('Failed to fetch card data.');
    }
}
