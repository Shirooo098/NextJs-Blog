import { cardsData, CategoryType } from "@/app/lib/placeholder"
import Image from 'next/image';
import { manRope } from "../fonts";

export default function Cards({
    limit, category 
} : { 
    limit? : number,
    category?: CategoryType | null
}) {

    let filteredCards = cardsData;

    if(category){
        filteredCards = cardsData.filter((card) => card.category == category);
    }

    const slicedCards = limit ? filteredCards.slice(0, limit) : filteredCards;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {slicedCards.map((card, index) => (
            <Card
                key={index}
                title={card.title}
                date={card.date}
                category={card.category}
                imageUrl={card.imageUrl}
            />
        ))}
    </div>
  )
}
export function Card({
    title, 
    date,
    category,
    imageUrl
}: {
    title: string,
    date: string,
    category: CategoryType,
    imageUrl: string
}){
    return(
        <article className="relative col-span-1 row-span-1">
            <div className="w-full rounded-xl overflow-hidden flex flex-col items-center">
                <Image
                    src={imageUrl}
                    alt={title}
                    height={500}
                    width={500}
                    className="aspect-[4/3] size-full object-cover object-center"
                />
            </div>
            <div className="flex flex-col mt-4 w-full">
                <h4 className={`${manRope.className} uppercase text-semibold sm:text-sm text-blue-900`}>{category}</h4>
                <h2 className={`${manRope.className} capitalize font-semibold sm:text-lg line-clamp-2 my-1`}>{title}</h2>
                <p className={`${manRope.className} capitalize font-semibold text-gray-500`}>{date}</p>
            </div>
        </article>
    )
}
