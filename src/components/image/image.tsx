interface imageProps {
  image: string | undefined
  imageSize: string | undefined
}

export const Image = (props: imageProps) => {
  const backgroundProps = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.0))`,
    backgroundSize: `100% 100%`,
  };
  return (
     <img className={`${props.imageSize} bg-no-repeat`} src={props.image} style={backgroundProps} />
  )
}