import Image from "next/image"

export default function Hero(){
    return(
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
            <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-gray-900 rounded-3xl z-0"></div>
            <Image
                loading="eager"
                priority={true}
                src="/home.jpg"
                alt="Building Web Applications"
                height={500}
                width={500}
                className="size-full object-center object-cover rounded-3xl -z-10"
            />
        </article>
    )
}