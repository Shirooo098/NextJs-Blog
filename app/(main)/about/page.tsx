import { manRope, robotoMono } from "@/app/ui/fonts"
import Footer from "@/app/ui/footer"
import Image from "next/image"

export default function About() {
  return (
    <>
      <div className="w-full inline-block py-6">
        <main className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-gray-900 rounded-3xl z-0"></div>
        <div className={`${manRope.className} text-white size-full flex flex-col items-center justify-center z-1`}>
          <h1 className="w-2/3 sm:w-1/2 text-start sm:text-center font-bold text-5xl xs:text-6xl sxl:text-7xl">Dream Big, Work Hard, Achieve More!</h1>
          <p className="w-2/3 sm:w-1/2  font-medium capitalize mt-5 text-sm sm:text-base">This motto drives my work as an aspiring web developer. I embrace every challenge as it gives me an opportunity to learn. With each project, I aim to achieve long-lasting impact. </p>
        </div>
        <Image
          loading="lazy"
          alt="Dream Big, Work Hard, Achieve More!"
          src="/about-hero.jpg"
          fill
          className="size-full object-center object-cover rounded-3xl -z-10"
        />
      </main>
      </div>

      <div className="w-full flex flex-col p-5 xs:p-10 sm:p-12 lg:p-20 border-t-2 border-b-2 border-black">
        <h2 className={`${robotoMono.className} font-semibold text-lg sm:text-3xl md:text-4xl text-blue-900`}>My Favorite Tools are...</h2>
        <ul className="flex flex-wrap mt-8 justify-center xs:justify-start">
          <li className="tools">Next.js</li>
          <li className="tools">Tailwind CSS</li>
          <li className="tools">Figma</li>
          <li className="tools">PostgresSQL</li>
          <li className="tools">MySQL</li>
          <li className="tools">Node.js</li>
          <li className="tools">Express.js</li>
          <li className="tools">PHP</li>
        </ul>
      </div>
      <Footer/>
    </>
  )
}
