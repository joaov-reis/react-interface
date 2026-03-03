import { Button, Container } from "reactstrap";
import { StyledBrand, StyledNavbar } from "./styles";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router";
import { BsSun } from "react-icons/bs";

function Header() {
  const location = useLocation();
  return (
    <StyledNavbar>
      <Container className="d-flex justify-content-between">
        <StyledBrand tag={Link} to="/">
          <img
            alt="Logo Infnet"
            src={logo}
            style={{
              height: 40,
              width: 40,
            }}
          />
          <span>Infnet Eventos</span>
        </StyledBrand>
        <div className="d-flex gap-2 align-items-center">
          {location.pathname !== "/create-event" && (
            <Button tag={Link} to="/create-event" color="primary">
              Criar evento
            </Button>
          )}
          <Button outline size="sm" className="">
            <BsSun size={18} />
          </Button>
        </div>
      </Container>
    </StyledNavbar>
  );
}

export default Header;
