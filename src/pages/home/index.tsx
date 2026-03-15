import { Link, useLocation } from "react-router";
import { Container } from "reactstrap";
import { StyledButton } from "./styles";

function Home() {
  const location = useLocation();

  return (
    <Container>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    }}
  >
    {location.pathname !== "/create-ticket" && (
      <StyledButton tag={Link} to="/create-ticket">
        Abrir ordem de serviço
      </StyledButton>
    )}

    {location.pathname !== "/my-tickets" && (
      <StyledButton tag={Link} to="/my-tickets">
        Minhas ordens de serviço
      </StyledButton>
    )}

    {location.pathname !== "/contact-us" && (
      <StyledButton tag={Link} to="/contact-us">
        Fale conosco
      </StyledButton>
    )}
  </div>
</Container>
  );
}

export default Home;
