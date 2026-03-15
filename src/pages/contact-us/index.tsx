import { Link, useLocation } from "react-router";
import { Container } from "reactstrap";
import { StyledButton } from "./styles";

function ContactUs() {
  const location = useLocation();

  return (
    <Container>
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}>

        {location.pathname !== "/create-ticket" && (<StyledButton tag={Link} to="/create-ticket">Abrir ordem de serviço </StyledButton>)}

      </div>
    </Container>
  );
}

export default ContactUs;
