import { Button, CardBody, CardText, CardTitle } from "reactstrap";
import { CardBgDefault } from "../../constants";
import { CardContainer, ImageContainer } from "./styles";

interface ActionProps {
  text: string;
  onClick: () => void;
}

interface CardCustomProps {
  title: string;
  description: string;
  subtitle: string;
  imageUrl?: string;
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
}

function CardCustom({
  title,
  description,
  subtitle,
  imageUrl = CardBgDefault,
  primaryAction,
  secondaryAction,
}: CardCustomProps) {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={imageUrl} alt={title} />
      </ImageContainer>
      <CardBody className="d-flex flex-column">
        <CardTitle tag={"h5"}>{title}</CardTitle>
        <small className="text-muted mb-2">{subtitle}</small>
        <CardText className="flex-grow-1">
          {description.length > 100
            ? description.substring(0, 100)
            : description}
        </CardText>
        {(primaryAction || secondaryAction) && (
          <div className="d-flex justify-content-between mt-3">
            {primaryAction && (
              <Button
                outline
                color="info"
                size="sm"
                onClick={primaryAction.onClick}
              >
                {primaryAction.text}
              </Button>
            )}
            {secondaryAction && (
              <Button
                color="success"
                size="sm"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
}

export default CardCustom;
