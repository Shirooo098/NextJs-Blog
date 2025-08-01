import { manRope } from "@/app/ui/fonts"
import Footer from "@/app/ui/footer"

export default function About() {
  return (
    <>
      <main className="flex justify-center w-full">
        <section className={`${manRope.className} flex flex-col justify-center w-full md:w-1/2 px-5 xs:p-10 pb-10 pt-10 lg:px-16`}>
          <h1 className="text-center font-bold text-5xl xs:text-6xl sxl:text-7xl">Dream Big, Work Hard, Achieve More!</h1>
          <p className="font-medium capitalize mt-5 text-base">This motto drives my work as an aspiring web developer. I embrace every challenge as it gives me an opportunity to learn. With each project, I aim to achieve long-lasting impact. </p>
        </section>

      </main>
      <Footer/>
    </>
  )
}
