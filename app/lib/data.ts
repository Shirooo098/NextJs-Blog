import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});


export async function fetchAllBlogs(){
    try {
        const blogs = await sql`SELECT title, category, 
        description, date, image as imageUrl
        FROM blogs ORDER BY date desc`

        return {blogs}
    } catch (error) {
        console.error('Database error: ', error)
        throw new Error('Failed to fetch card data.');
    }
}