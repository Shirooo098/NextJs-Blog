import { cardsData, CategoryType } from "@/app/data/placeholder"
import Image from 'next/image';
import { manRope } from "../fonts";

export default function Cards() {
  return (
    <div>
        {cardsData.map((card, index) => (
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
        <div className="">
            <div className="">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={500}
                    height={500}/>
            </div>
            <h4 className={`${manRope}`}>{category}</h4>
            <p className={`${manRope}`}>{title}</p>
            <p className={`${manRope}`}>{date}</p>
        </div>
    )
}
