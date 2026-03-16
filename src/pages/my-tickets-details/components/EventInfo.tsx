import { Button } from "reactstrap";
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
        <h2>
          {event.category.name} - {event.title}{" "}
        </h2>
      </div>
      <HeroImage src={event.image || CardBgDefault} alt={event.title} />

      <div className="mt-4">
        <h5>Data: {formatDate(event.date)}</h5>
        <p className="mt-3 lead" style={{ whiteSpace: "pre-wrap" }}>
          {event.description}
        </p>
      </div>

      <div className="d-flex gap-3 mt-5">
        <Button color="danger" size="lg" onClick={onSubscribe}>
          Solicitar urgência
        </Button>
        <Button outline color="secondary" size="lg" onClick={onBack}>
          Voltar
        </Button>
      </div>
    </InfoContainer>
  );
}

export default EventInfo;
