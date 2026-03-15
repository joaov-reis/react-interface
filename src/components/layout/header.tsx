import { Button, Container } from "reactstrap";
import { StyledBrand, StyledNavbar } from "./styles";
import logo from "../../assets/logo-company.jpg";
import { Link } from "react-router";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "../../context/ThemeConxtext";
function Header() {
  const { toggleTheme, isDark } = useTheme();
  return (
    <StyledNavbar>
      {" "}
      <Container className="d-flex justify-content-between">
        {" "}
        <StyledBrand tag={Link} to="/">
          {" "}
          <img
            alt="Logo empresa"
            src={logo}
            style={{ height: 100, width: 180, borderRadius: 25 }}
          />{" "}
        </StyledBrand>{" "}
        <div className="flex-fill d-flex flex-column align-items-center">
          {" "}
          <span className="fw-bold m-3 fs-5">
            {" "}
            Assistência técnica | Reparos em eletrodomésticos{" "}
          </span>{" "}
        </div>{" "}
        <div>
          {" "}
          <Button
            outline
            size="sm"
            className="d-flex align-items-center justify-content-center"
            color={isDark ? "light" : "dark"}
            onClick={toggleTheme}
          >
            {" "}
            {isDark ? <BsSun size={18} /> : <BsMoonStars size={18} />}{" "}
          </Button>{" "}
        </div>{" "}
      </Container>{" "}
    </StyledNavbar>
  );
}
export default Header;
