import { Button, Container } from "reactstrap";
import { StyledBrand, StyledNavbar } from "./styles";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "../../context/ThemeConxtext";

function Header() {
  const location = useLocation();
  const { toggleTheme, isDark } = useTheme();
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
          <Button
            outline
            size="sm"
            className="d-flex align-items-center justify-content-center"
            color={isDark ? "light" : "dark"}
            onClick={toggleTheme}
          >
            {isDark ? <BsSun size={18} /> : <BsMoonStars size={18} />}
          </Button>
        </div>
      </Container>
    </StyledNavbar>
  );
}

export default Header;
