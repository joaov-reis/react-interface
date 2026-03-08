import { useNavigate, useParams } from "react-router";
import { useEvents } from "../../hooks/useEvents";
import { useCallback, useMemo } from "react";
import { Button, Container } from "reactstrap";
import EventInfo from "./components/EventInfo";

function DetailsEvent() {
  const { id } = useParams<{ id: string }>();
  const { getEventById } = useEvents();
  const navigate = useNavigate();

  const event = useMemo(() => {
    return id ? getEventById(id) : undefined;
  }, [id, getEventById]);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSubscribe = useCallback(() => {
  if (event) {
    console.log("Inscrição no evento:", event.id);
  }
}, [event]);

if (!event) {
  return (
    <Container className="py-5 text-center">
      <h3>Evento não encontrado</h3>
      <Button color="link" className="mt-3" onClick={handleBack}>
        Voltar para a página inicial
      </Button>
    </Container>
  );
}
  return <Container>
    <EventInfo
      event={event}
      onBack={handleBack}
      onSubscribe={handleSubscribe}
    />
  </Container>;
}

export default DetailsEvent;
