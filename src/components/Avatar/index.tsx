import { Container, AvatarImg } from "./styles";

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: "sm" | "lg";
}

function Avatar({ name, imageUrl }: AvatarProps) {
  const initialLetter = name.charAt(0).toLocaleUpperCase();
  return (
    <Container lg={true}>
      {imageUrl ? (
        <AvatarImg
          src={imageUrl}
          alt={`Imagem de ${name}`}
        />
      ): (
      <span>{initialLetter}</span>
    )}
    </Container>
  );
}

export default Avatar;
