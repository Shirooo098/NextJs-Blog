import Form from "@/app/ui/admin/create-form";
import { manRope } from "@/app/ui/fonts";


export default function CreateBlogs() {
  return (
    <main>
      <h1 className={`${manRope.className} text-2xl md:text-3xl my-5`}>Create Blog</h1>
      
      <Form/>
    </main>
  )
}
