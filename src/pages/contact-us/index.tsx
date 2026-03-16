import { useNavigate } from "react-router";
import { useCallback } from "react";
import { Container } from "reactstrap";
import ContactCard from "./components/EventInfo";

function MyTicketsDetails() {
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Container>
      <ContactCard onBack={handleBack} />
    </Container>
  );
}

export default MyTicketsDetails;
