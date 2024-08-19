import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNews } from "../hooks/useNews";
import { CardsProps } from "../models/card";
import { NavigationLink } from "../navigation/navigationLink";
import { Category } from "../category/category";
import { PublicationTime } from "../published/publishedTime";
import { Author } from "../author/author";
import { ClassifyNews } from "../classify/classifyNews";
import { PublishedAt } from "../published/publishedAt";
import { Skeleton } from "../ui/skeleton";
import { Image } from "../image/image";

export const Cards = (props: CardsProps) => {
  const { loading } = useNews();

  if (loading) return <Skeleton className='w-full h-[180px] bg-slate-400 rounded-none first:h-full' />

  return (
    <Card className={`p-0 flex border-0 items-start justify-end rounded-none sm:rounded-sm ${props.className}`}>
      <NavigationLink className={props.imageSize} url={props.url} target="_blank">
        {props.image && <Image image={props.image} imageSize={props.imageSize} />}
      </NavigationLink>
      <CardHeader className={`h-full flex justify-start rounded-lg p-0
      ${props.cardHeaderStyles}`}>
        <Category categories={props.category} />
        <ClassifyNews type={props.published!} />
        <Author author={props.author} />
        <PublishedAt date={props.published} />
        <CardTitle
          className={`text-ellipsis pt-1 rounded-md sm:line-clamp-3 ${props.cardTitleStyles}`}>
          <NavigationLink className="font-times hover:text-sky-900 font-thin" url={props.url} target="_blank">
            {props.title}
          </NavigationLink>
        </CardTitle>
        <CardDescription
          className={`font-times text-start text-base text-slate-700 leading-[1.2rem]
            ${props.cardDescriptionStyles} sm:line-clamp-4`}>
          {props.description}
        </CardDescription>
        <PublicationTime time={props.published} />
      </CardHeader>
    </Card>
  )
}