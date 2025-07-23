
import { NextResponse, NextRequest } from "next/server";
import { sql } from "../route"
import { BlogContent } from "@/app/lib/definitions"

export async function GET(
    req: NextRequest, 
    { params }: { params : Promise<{ id: string }> })
{
    const {id} = await params

    try {
        const blog = await sql<BlogContent[]>
            `SELECT 
                blogs.id,
                blogs.title,
                blogs.category,
                blogs.date,
                blogs.description,
                blogs.image as "imageUrl"
            FROM blogs
            WHERE blogs.id = ${id}`

        console.log(blog);

        if(!blog){
            return NextResponse.json({ 
                error: "Blog not Found"
            },{ status: 404 })
        }
           

        return NextResponse.json(blog[0])
    } catch (error) {
        console.error("Database error", error)
        throw new Error("Failed to fetch blog ID.")
    }
}