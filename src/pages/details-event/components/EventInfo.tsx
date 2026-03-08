import { Badge, Button } from "reactstrap";
import { CardBgDefault } from "../../../constants";
import type { EventWithId } from "../../../types";
import { HeroImage, InfoContainer } from "./styles";
import { formatDate } from "../../../utils/format-date";

interface EventInfoProps {
  event: EventWithId;
  onBack: () => void;
  onSubscribe: () => void;
}

function EventInfo({ event, onBack, onSubscribe }: EventInfoProps) {
  return (
    <InfoContainer>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>{event.title}</h1>
        <Badge color="primary">Local: {event.category.name}</Badge>
      </div>
      <HeroImage src={event.imageUrl || CardBgDefault} alt={event.title} />

      <div className="mt-4">
        <h5>Data: {formatDate(event.date)}</h5>
        <p className="mt-3 lead" style={{ whiteSpace: "pre-wrap" }}>
          {event.description}
        </p>
      </div>

      <div className="d-flex gap-3 mt-5">
        <Button color="success" size="lg" onClick={onSubscribe}>
          Confirme sua presença
        </Button>
        <Button outline color="secondary" size="lg" onClick={onBack}>
          Voltar
        </Button>
      </div>
    </InfoContainer>
  );
}

export default EventInfo;
