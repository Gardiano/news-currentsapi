interface AuthorProps {
  author?: string
}

export const Author = (props: AuthorProps) => {
  return props.author && <i className="text-xs">{props.author}</i>
}