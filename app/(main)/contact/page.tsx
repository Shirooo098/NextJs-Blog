import ContactForm from "@/app/components/contactForm";
import { manRope } from "@/app/ui/fonts";
import Footer from "@/app/ui/footer";

export default function Contact() {
  return (
    <>
      <div className="w-full inline-block py-6">
        <main className="flex flex-col justify-center size-full">
            <h1 className={`${manRope.className} font-bold text-8xl text-center`}>Let&apos;s connect!</h1>
            <ContactForm/>
        </main>
      </div>
      <Footer/>
    </>
  )
}
