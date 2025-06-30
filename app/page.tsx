import RecentBlogs from "./ui/blogs/recent-blogs";
import Footer from "./ui/footer";

export default function Home() {
  return (
   <>
    <div className="h-[var(--section-height)] py-6 px-4 sm:px-6 md:px10 lg:px-16 xl:px-24">Home Page</div>
    <RecentBlogs/>
    <Footer/>
   </>
  );
}
