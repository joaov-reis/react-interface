import { useNavigate, useParams } from "react-router";
import { useEvents } from "../../hooks/useEvents";
import { useCallback, useMemo } from "react";
import { Button, Container } from "reactstrap";
import EventInfo from "./components/EventInfo";

function MyTicketsDetails() {
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
    console.log(`Status do reparo: ${event.id} alterado para urgente!`);
    alert("Sua solicitação foi sinalizada como urgente! Em breve lhe enviaremos uma resposta.");
  }
}, [event]);

if (!event) {
  return (
    <Container className="py-5 text-center">
      <h3>Solicitação de reparo não encontrado</h3>
      <Button color="link" className="mt-3" onClick={handleBack}>
        Voltar para a página anterior
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

export default MyTicketsDetails;
