import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CardsProps } from "../models/card";
import { NavigationLink } from "../navigation/navigationLink";
import { Category } from "../category/category";
import { Published } from "../published/published";
import { Author } from "../author/author";

export const Cards = (props: CardsProps) => {
  const backgroundProps = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.0))`,
    backgroundSize: `100% 100%`,
  };

  return (
    <Card className={`p-0 flex border-0 items-start justify-end
        ${props.className}`}>
      <NavigationLink url={props.url} target="_blank">
        {props.image && <img className={`${props.imageSize} bg-no-repeat`} src={props.image} style={backgroundProps} />}
      </NavigationLink>
      <CardHeader className={`h-full flex justify-start rounded-lg p-0
        ${props.cardHeaderStyles}`}>
        <Category categories={props.category} />
        <Author author={props.author} />
          <CardTitle
            className={` text-slate-900 text-ellipsis pt-1 rounded-md sm:line-clamp-3 ${props.cardTitleStyles}`}>
            <NavigationLink className="font-times hover:text-sky-900 font-thin" url={props.url} target="_blank">
              {props.title}
            </NavigationLink>
          </CardTitle>
        <CardDescription
          className={` font-prata text-start text-base text-slate-600 leading-none
              ${props.cardDescriptionStyles} sm:line-clamp-4`}>
          {props.description}
        </CardDescription>
        <Published published={props.published} />
      </CardHeader>
    </Card>

  )
}