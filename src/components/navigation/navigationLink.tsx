import { ComponentProps, ReactNode } from "react"
import { Link } from "react-router-dom"

interface NavigationLinkProps extends ComponentProps<'a'> {
  url?: string
  className?: string
  children?: ReactNode
}

export const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <Link 
      {...props}
      to={props.url!}
      className={`${props.className}`}>
      {props.children}
    </Link>
  );
}