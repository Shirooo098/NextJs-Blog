import { Suspense } from "react";
import RecentBlogs from "../ui/blogs/recent-blogs";
import Footer from "../ui/footer";
import Loading from "./loading";
import Hero from "../ui/hero";

export const experimental_ppr = true;

export default function Home() {
  return (
   <>
    <div className="w-full inline-block py-6">
      <Hero/>
    </div>
    <Suspense fallback={<Loading />}>
      <RecentBlogs/>
    </Suspense>
    <Footer/>
   </>
  );
}
